import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonStyleProps = 'PRIMARY' | 'SECONDARY';

interface ButtonProps {
    type: ButtonStyleProps
}

export const ButtonContainer = styled(TouchableOpacity)<ButtonProps>`
    flex: 1;
    min-height: 56px; 
    max-height: 56px;
    justify-content: center;
    align-items: center;

    border-radius: 6px;

    background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
`;

export const ButtonText = styled.Text`
${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
`}`;