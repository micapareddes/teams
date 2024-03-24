import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Container } from './styles';
import { Header } from '@components/Header';
import { Heading } from '@components/Heading';
import { TeamsCard } from '@components/TeamCard';
import { useCallback, useState } from 'react';
import { EmptyList } from '@components/EmptyList';
import { Button } from '@components/Button';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { getAllGroups } from 'src/storage/group/getAllGroups';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation()
  function handleNewGroup() {
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try {
      const allGroupsData = await getAllGroups()
      setGroups(allGroupsData)
    } catch(error) {
      console.log(error)
    }
  }

  function handleOpenGroup(groupName: string) {
    navigation.navigate('participants', {group: groupName})
  }

  useFocusEffect(useCallback(() => {
    console.log('passou')
    fetchGroups()
  }, [])) //atualiza tela de inicio cada vez que volta para exibir novo grupo

  return (
    <Container>
      <Header />

      <Heading 
        title='Turmas' 
        subtitle='Jogue com a sua turma!'
      />

      <FlatList 
        data={groups} 
        keyExtractor={item => item} 
        renderItem={({item}) => (
          <TeamsCard
            teamsName={item}
            onPress={() => handleOpenGroup(item)}
          />
        )}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={() => <EmptyList/>}
        />

        <Button 
          buttonText='Criar nova turma' 
          onPress={handleNewGroup}
        />
      
    </Container>
  );
}