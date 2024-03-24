import { useNavigation } from "@react-navigation/native";
import { Container, GoBackButton, GoBackIcon, Logo } from "./styles";
import logopng from '@assets/logo.png'

interface Props {
    showGoBackButton?: boolean
}

export function Header({ showGoBackButton=false }: Props) {
    const navigation = useNavigation()
    function handleGoBack() {
        navigation.navigate('groups')
    }
    
    return(
        <Container>
            {showGoBackButton &&
                <GoBackButton onPress={handleGoBack}>
                    <GoBackIcon />
                </GoBackButton>
            }
            <Logo source={logopng} />
        </Container>
    )
}