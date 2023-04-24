import { CardList, Tags, ToDoContainer, ToDoList } from './styles';

export function Done() {
    return (
        <ToDoContainer>
            <h1>Feito</h1>
            <ToDoList>
                <CardList>
                    <h2>#boraCodar uma página de login &lt;/&gt;</h2>
                    <p>Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.</p>
                    <Tags>
                        <span>Rocketseat</span>
                        <span>Desafio</span>
                    </Tags>
                </CardList>
                <CardList>
                    <h2>#boraCodar uma página de clima &lt;/&gt;</h2>
                    <p>Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.</p>
                    <Tags>
                        <span>Rocketseat</span>
                        <span>Desafio</span>
                    </Tags>
                </CardList>
                <CardList>
                    <h2>#boraCodar um conversor &lt;/&gt;</h2>
                    <p>Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.</p>
                    <Tags>
                        <span>Rocketseat</span>
                        <span>Desafio</span>
                    </Tags>
                </CardList>
            </ToDoList>
        </ToDoContainer >
    )
}