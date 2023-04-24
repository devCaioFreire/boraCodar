import styled from "styled-components";

export const SidebarContainer = styled.aside`
    display: flex;  
    flex-direction: column;
    max-width: 175px;
    width: 100%;
    height: 100vh;
    background: ${(props) => props.theme.colors.purple};;
    float: left;
    position: fixed;

svg {
    color: ${(props) => props.theme.colors.white};
}
`;

export const Header = styled.div`
    padding: 2rem;
    
img {
    width: 4rem;
}
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 3.5rem;
    align-items: left;
    font-size: 1rem;
    

svg {
    color: ${(props) => props.theme.colors["gray-100"]};
    
}

a {
    display: flex;
    gap: 1rem;
    color: ${(props) => props.theme.colors.white};
}

ul:first-child {
   margin-top: 3rem;
   font-weight: bold;
}
`;

export const Footer = styled.footer`
    position: absolute;
    bottom: 0;
    padding: 2rem;
`;

export const ButtonToggle = styled.button`
    
span {
    display: flex;
    gap: 1rem;
    font-size: 1rem;
    align-items: center;
    color: ${(props) => props.theme.colors.white};
}
`
