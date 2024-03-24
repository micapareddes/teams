import { UsersThree } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const NewGroupContainer = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    padding: 57px 24px 42px 24px;
`;

export const NewGroupContent = styled.View`
    flex: 1;
    justify-content: center;
`;

export const LineTeamIcon = styled(UsersThree).attrs(({theme}) => ({
    color: theme.COLORS.GREEN_500,
    size: 56,
}))`
    align-self: center;
`;