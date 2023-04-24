import { CardList, Tags, ToDoContainer, ToDoList } from './styles';

export function ToDo() {
    return (
        <ToDoContainer>
            <h1>A fazer</h1>
            <ToDoList>
                <CardList>
                    <h2>#boraCodar um Kanban 🖥️</h2>
                    <p>Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.</p>
                    <Tags>
                        <span>Rocketseat</span>
                        <span>Desafio</span>
                    </Tags>
                </CardList>
                <CardList>
                    <h2>Manter a ofensiva 🔥</h2>
                    <p>Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva</p>
                    <Tags>
                        <span>Rocketseat</span>
                    </Tags>
                </CardList>
                <CardList>
                    <h2>#boraCodar um Kanban 🖥️</h2>
                    <p>Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.</p>
                    <Tags>
                        <span>Rocketseat</span>
                        <span>Desafio</span>
                    </Tags>
                </CardList>
            </ToDoList>
        </ToDoContainer>
    )
}