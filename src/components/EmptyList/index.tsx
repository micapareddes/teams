import { Container, Message } from "./styles";

interface EmptyListProps {
    text?: string
}

export function EmptyList({text='Você não possui nenhuma turma cadastrada.'}: EmptyListProps) {
    return(
        <Container >
            <Message>{text}</Message>
        </Container>
    )
}