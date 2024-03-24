import { Alert, FlatList, TextInput } from "react-native";
import { useEffect, useRef, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { NameInputContainer, ParticipantsQuantity, TeamHeader } from "./styles";
import { Container } from "@screens/Groups/styles";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Heading } from "@components/Heading";
import { IconButton } from "@components/IconButton";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { ParticipantCard } from "@components/ParticipantCard";
import { EmptyList } from "@components/EmptyList";
import { AppError } from "@utils/AppError";
import { addParticipantByGroup } from "src/storage/participants/addParticipantByGroup";
import { getParticipantByGroupAndTeam } from "src/storage/participants/getParticipantByGroupAndTeam";
import { ParticipantStorageDTO } from "src/storage/participants/participantStorageDTO";
import { removeParticipantByGroup } from "src/storage/participants/removeParticipantByGroup";
import { removeGroup } from "src/storage/group/removeGroup";

interface RouteParams {
    group: string
}

export function GroupParticipants() {
    const [activeTeam, setActiveTeam] = useState('Time A')
    const [newParticipantName, setNewParticipantName] = useState('')
    const [participants, setParticipants] = useState<ParticipantStorageDTO[]>([])

    const navigation = useNavigation()
    const route = useRoute()
    const {group} = route.params as RouteParams;

    const newParticipantNameRef = useRef<TextInput>(null)

    async function handleAddParticipant() {
        if (newParticipantName.trim().length === 0) {
            return Alert.alert('Campo vazio', 'Informe o nome da pessoa que deseja adicionar.')
        }

        const newParticipant = {
            name: newParticipantName,
            team: activeTeam,
        }

        try{
            newParticipantNameRef.current?.blur()
            await addParticipantByGroup(newParticipant, group)
            setNewParticipantName('')
        }catch(error){

            if (error instanceof AppError) {
                Alert.alert('Pessoa já existe', error.message)
            } else {
                Alert.alert('Ops...', 'Não foi possível adicionar essa pessoa no momento, tente novamente mais tarde.')

            }
        }

    }

    async function fetchParticipantsByTeam() {
        try{
            const participantsOfTeam = await getParticipantByGroupAndTeam(group, activeTeam)
            setParticipants(participantsOfTeam)
        }catch(error) {
            console.log(error)
            Alert.alert('Erro ao carregar pessoas', 'Não foi possível carregar as pessoas do time no momento. Tente novamente mais tarde, e caso não seja resolvido entre em contato com o suporte.')
        }
    }

    async function handleOnRemoveParticipant(participantName: string) {
        try{
            await removeParticipantByGroup(participantName, group)
        } catch(error) {
            console.log(error)
            Alert.alert('Ops...','Ocorreu um erro inesperado, tente novamente mais tarde.')
        }
    }

    async function onRemoveGroup() {
        try{
            await removeGroup(group)
            navigation.navigate('groups')
        } catch(error) {
            console.log(error)
            Alert.alert('Ops...','Ocorreu um erro inesperado, tente novamente mais tarde.')
        }
    }

    async function handleOnRemoveGroup() {
        Alert.alert(
            `Tem certeza que deseja remover o grupo ${group}?`,
            'Esta ação não pode ser desfeita.',
            [
                {text: 'Não', style: 'cancel'},
                {text: 'Sim, remover', onPress: () => onRemoveGroup()}
            ]
        )
    }

    useEffect(() => {
        fetchParticipantsByTeam()
    }, [activeTeam, participants])

    

    return(
        <Container>
            <Header showGoBackButton/>

            <Heading 
                title={group}
                subtitle="Adicione a galera e separe os times"
            />
            <NameInputContainer>
                <Input 
                    inputRef={newParticipantNameRef}
                    placeholder="Nome do participante"
                    onChangeText={setNewParticipantName}
                    autoCorrect={false}
                    value={newParticipantName}
                    onSubmitEditing={handleAddParticipant}
                    returnKeyType="done"
                />
                <IconButton icon="add" onPress={handleAddParticipant}/>
            </NameInputContainer>

            <TeamHeader>
                <FlatList 
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                        <Filter 
                            name={item} 
                            isActive={item === activeTeam}
                            onPress={() => setActiveTeam(item)}
                        />
                    )}
                    horizontal
                />

                <ParticipantsQuantity>{participants.length}</ParticipantsQuantity>
            </TeamHeader>

            <FlatList
                data={participants}
                keyExtractor={item => item.name}
                renderItem={({item}) => (
                    <ParticipantCard 
                        name={item.name} 
                        onRemove={() => handleOnRemoveParticipant(item.name)}
                    />
                )}
                ListEmptyComponent={() => (
                    <EmptyList 
                        text="Não há nenhum participante cadastrado :("
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    {paddingBottom: 100},
                    participants.length === 0 && {flex: 1}
                ]}
            />

            <Button 
                buttonText="Remover turma" 
                type={"SECONDARY"}
                onPress={() => handleOnRemoveGroup()}
            />
            

        </Container>
    )
}