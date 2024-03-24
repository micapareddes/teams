import AsyncStorage from "@react-native-async-storage/async-storage"
import { getPatricipantsByGroup } from "./getParticipantsByGroup"
import { PARTICIPANT_COLLECTION } from "../storageConfig"

export async function removeParticipantByGroup(participantName: string, group: string) {
    try{
        const storage = await getPatricipantsByGroup(group)
        const filteredParticipants = storage.filter(participant => participant.name !== participantName)
        const participants = JSON.stringify(filteredParticipants)
        await AsyncStorage.setItem(`${PARTICIPANT_COLLECTION}-${group}`, participants)
    } catch(error){
        throw error
    }
}