import { Container, TeamIcon, TeamsName } from "./styles";
import {TouchableOpacityProps} from 'react-native'

interface TeamsCardProps extends TouchableOpacityProps {
    teamsName: string
} 

export function TeamsCard({teamsName, ...rest}: TeamsCardProps) {
    return(
        <Container {...rest}>
            <TeamIcon />
            <TeamsName > {teamsName} </TeamsName>
        </Container>
    )
}