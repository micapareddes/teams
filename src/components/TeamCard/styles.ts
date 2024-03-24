import styled, { css } from "styled-components/native";
import {UsersThree} from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.GRAY_500};
    
    gap: 20px;
    padding: 32px 24px;
    border-radius: 6px;
    margin-bottom: 20px;
`;

export const TeamIcon = styled(UsersThree).attrs(({theme}) => ({
    size: 32,
    weight: "fill",
    color: theme.COLORS.GREEN_500,
}))``;

export const TeamsName = styled.Text`
${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG};
    color: ${theme.COLORS.GRAY_100};
`}`;