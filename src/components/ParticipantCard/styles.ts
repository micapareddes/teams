import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const ParticipantCardContainer = styled.View`
    width: 100%;
    height: 56px;
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
`;

export const ParticipantName = styled.Text`
    flex:1;
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD};
        color: ${theme.COLORS.GRAY_200};
    `};
`;

export const ParticipantIcon = styled(MaterialIcons).attrs(({theme}) => ({
    size: 24,
    color: theme.COLORS.GRAY_200,
}))`
    margin-left: 16px;
    margin-right: 4px;
`;