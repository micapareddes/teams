import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const NameInputContainer = styled(SafeAreaView)`
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    padding-top:-20px ;
    background-color: ${({theme}) => theme.COLORS.GRAY_700};
    border-radius: 6px;
`;

export const TeamHeader = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin: 32px 0 12px;
`;

export const ParticipantsQuantity = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM};
    `};
`;