import styled from "styled-components";

export const ToDoContainer = styled.div`
    max-width: 550px;
    width: 100%;
`

export const ToDoList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const CardList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 450px;
    width: 100%;
    margin-top: 1.5rem;
    background: ${props => props.theme.colors.white};
    border-radius: 8px;
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.3);
    padding: 1.5rem;


h2 {
    font-size: 1.2rem;
}

p {
    
}



`
export const Tags = styled.div`
    display: flex;
    gap: 0.5rem;

span {
border-radius: 8px;
flex-direction: row;
font-weight: bold;
color: ${props => props.theme.colors.purple};
background-color: #E2D6FF;
padding: 0.3rem 0.5rem;
}
`