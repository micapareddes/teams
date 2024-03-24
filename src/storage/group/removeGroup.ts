import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllGroups } from "./getAllGroups";
import { GROUP_COLLECTION, PARTICIPANT_COLLECTION } from "../storageConfig";

export async function removeGroup(groupName: string) {
    try{
        const storage = await getAllGroups()
        const filteredGroups = storage.filter(group => group !== groupName)
        const groups = JSON.stringify(filteredGroups)
        await AsyncStorage.setItem(GROUP_COLLECTION, groups)
        await AsyncStorage.removeItem(`${PARTICIPANT_COLLECTION}-${groupName}`)
    } catch(error) {
        throw error
    }
}