import AsyncStorage from "@react-native-async-storage/async-storage"
import { PARTICIPANT_COLLECTION } from "../storageConfig"
import { ParticipantStorageDTO } from "./participantStorageDTO"

export async function getPatricipantsByGroup(group: string) {
    try{
        const storage = await AsyncStorage.getItem(`${PARTICIPANT_COLLECTION}-${group}`)
        const participants: ParticipantStorageDTO[] = storage ? JSON.parse(storage) : []
        return participants
    } catch(error) {
        throw error
    }
}