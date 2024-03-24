import { TouchableOpacityProps } from "react-native";
import { Icon, IconButtonContainer, IconButtonStyleProps } from "./styles";
import { MaterialIcons } from "@expo/vector-icons"

interface IconButtonProps extends TouchableOpacityProps {
    icon: keyof typeof MaterialIcons.glyphMap
    type?: IconButtonStyleProps
}

export function IconButton({icon, type='PRIMARY', ...rest}: IconButtonProps) {
    return(
        <IconButtonContainer {...rest}>
            <Icon name={icon} type={type}/>
        </IconButtonContainer>
    )
}