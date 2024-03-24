import { TouchableOpacityProps } from "react-native";
import { Container, FilterStyleProps, Name } from "./styles";

type FilterProps = FilterStyleProps & TouchableOpacityProps & {
    name: string
}

export function Filter({name, isActive=false, ...rest}:FilterProps) {
    return(
        <Container 
            isActive={isActive}
            {...rest}
        >
            <Name>
                {name}
            </Name>
        </Container>
    )
}