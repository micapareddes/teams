import { Heading } from "@components/Heading";
import { LineTeamIcon, NewGroupContainer, NewGroupContent } from "./styles";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "src/storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

export function NewGroup() {
    const [groupName, setGroupName] = useState('');

    const navigation = useNavigation()

    async function handleCreateGroup() {
        try{
            if (groupName.trim().length === 0) {

                Alert.alert('Turma vazia', 'Informe o nome da turma')

            } else {

                await groupCreate(groupName)
                navigation.navigate('participants', {group: groupName})

            }
        } catch(error) {

            if (error instanceof AppError) {

                Alert.alert('Não é permitido grupos iguais', error.message)

            } else {

                Alert.alert('Não foi possível criar um novo grupo', 'Tente novamente mais tarde.')

            }
        }
    }

    return(
        <NewGroupContainer>
            <Header showGoBackButton/>

            <NewGroupContent>
                <LineTeamIcon />
                
                <Heading 
                    title="Nova Turma"
                    subtitle="Crie uma turma para adicionar pessoas."
                />

                <Input 
                    placeholder="Nome da turma"
                    onChangeText={setGroupName}
                />
                
                <Button 
                    buttonText="Criar"
                    style={{marginTop: 20}}
                    onPress={handleCreateGroup}
                />

            </NewGroupContent>

        </NewGroupContainer>
    )
}