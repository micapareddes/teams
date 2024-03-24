import { IconButton } from "@components/IconButton";
import { ParticipantCardContainer, ParticipantIcon, ParticipantName } from "./styles";

interface ParticipantCardProps{
    name: string
    onRemove: () => void
}

export function ParticipantCard({name, onRemove}: ParticipantCardProps) {
    return(
        <ParticipantCardContainer>
            <ParticipantIcon name="person"/>

            <ParticipantName>
                {name}
            </ParticipantName>

            <IconButton 
                icon="close" 
                type="SECONDARY"
                onPress={onRemove}
            />
        </ParticipantCardContainer>
    )
}