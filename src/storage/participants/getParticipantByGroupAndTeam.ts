import { getPatricipantsByGroup } from "./getParticipantsByGroup"

export async function getParticipantByGroupAndTeam(group: string, team: string) {
    try{
        const storage = await getPatricipantsByGroup(group)
        const participants = storage.filter(participant => participant.team === team)
        return participants
    } catch(error){
        throw(error)
    }
}