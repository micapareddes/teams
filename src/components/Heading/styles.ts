import styled, { css } from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    margin: 32px 0;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: ${({theme}) => theme.FONT_SIZE.XL};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    color: ${({theme}) => theme.COLORS.WHITE};
`;

export const Subtitle = styled.Text`
${({theme}) => css`
    text-align: center;
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_300};
`}`;