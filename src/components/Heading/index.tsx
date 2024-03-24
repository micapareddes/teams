import { Container, Subtitle, Title } from "./styles";

interface HeadingProps {
    title: string
    subtitle: string
}

export function Heading({title, subtitle}: HeadingProps) {
    return(
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Container>
    )
}