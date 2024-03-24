import AsyncStorage from "@react-native-async-storage/async-storage";
import { ParticipantStorageDTO } from "./participantStorageDTO";
import { PARTICIPANT_COLLECTION } from "../storageConfig";
import { getPatricipantsByGroup } from "./getParticipantsByGroup";
import { AppError } from "@utils/AppError";

export async function addParticipantByGroup(newParticipant: ParticipantStorageDTO, group: string) {
    console.log(group, newParticipant)
    try{
        const storedParticipants = await getPatricipantsByGroup(group)
        console.log(`storedParticipants: ${storedParticipants}`)

        const participantAlreadyExists = storedParticipants.filter(participant => participant.name === newParticipant.name).length > 0
        console.log(participantAlreadyExists)

        if (participantAlreadyExists) {
            console.log('passou por: participantAlreadyExists')
            throw new AppError('Esta pessoa já está adicionada no grupo.')
        }

        const storage = JSON.stringify([...storedParticipants, newParticipant])
        await AsyncStorage.setItem(`${PARTICIPANT_COLLECTION}-${group}`, storage)

    } catch(error){
        throw error
    }
}