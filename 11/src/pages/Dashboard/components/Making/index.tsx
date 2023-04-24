import { CardList, Tags, ToDoContainer, ToDoList } from './styles';

export function Making() {
    return (
        <ToDoContainer>
            <h1>Fazendo</h1>
            <ToDoList>
                <CardList>
                    <h2>Conferir o novo desafio 🚀 </h2>
                    <p>Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível</p>
                    <Tags>
                        <span>Rocketseat</span>
                        <span>Desafio</span>
                    </Tags>
                </CardList>
                <CardList>
                    <h2>Ser incrível 😎</h2>
                    <p>Sempre me lembrar de que eu sou foda!</p>
                    <Tags>
                        <span>Badass</span>
                    </Tags>
                </CardList>
            </ToDoList>
        </ToDoContainer>
    )
}