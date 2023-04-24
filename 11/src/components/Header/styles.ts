import styled from "styled-components";
import { darkTheme, lightTheme } from "../../styles/theme/Theme";

export const HeaderContainer = styled.header`
     margin: 3rem 5rem 7rem 0rem;

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
`

export const HeaderLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.25rem;
 

img {
    width: 3rem;
}

h2 {
    font-size: 2.5rem;
    font-weight: bold;
    color: ${(props) =>
        props.theme === lightTheme
            ? props.theme.colors.logoHeader
            : props.theme.colors.logoHeader};
}
`

export const HeaderRight = styled.button`
    color: ${(props) =>
        props.theme === lightTheme
            ? props.theme.colors.iconHeader
            : props.theme.colors.iconHeader};
`