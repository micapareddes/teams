import { TouchableOpacityProps } from "react-native";
import { ButtonStyleProps, ButtonContainer, ButtonText } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
    buttonText: string
    type?: ButtonStyleProps
}

export function Button({buttonText, type='PRIMARY', ...rest}: ButtonProps) {
    return(
        <ButtonContainer type={type} {...rest}>
            <ButtonText>{buttonText}</ButtonText>
        </ButtonContainer>
    )
}