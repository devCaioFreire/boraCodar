import styled from "styled-components";

import svgSearch from '../../assets/SearchIcon.svg';
import { darkTheme, lightTheme } from "../../styles/theme/Theme";

export const DashboardLayout = styled.div`
    width: 100%;
    float: left;
    height: 100vh;
    background: ${props => props.theme.colors.purple};
    padding-left: 175px;
`

export const DashboardBase = styled.div`
    padding: 0rem 2rem;
`

export const DashboardContainer = styled.body`
    border-top: 4px solid ${props => props.theme.colors.purple};
    border-top-left-radius: 32px;
    padding: 3rem 2rem;

    background: ${(props) =>
        props.theme === lightTheme
            ? props.theme.colors.darkBackground
            : props.theme.colors.lightBackground};

`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 2rem;
    padding: 1.5rem;

    color: ${(props) =>
        props.theme === lightTheme
            ? props.theme.colors.darkH1
            : props.theme.colors.lightH1};

h1 {
    display: flex;
    gap: 1rem;
    align-items: center;
}
`

export const ImagePerfilContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px solid ${props => props.theme.colors.purple};
    border-radius: 50%;
    background-color: ${props => props.theme.colors.purple};

img {
    width: 4.5rem;
    height: 4.5rem;
}
`
export const SearchContainer = styled(DashboardBase)`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
`

export const FilterButton = styled.button`
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    padding: 1rem 2rem;
    background: ${props => props.theme.colors.purple};
    border-radius: 5px;
    color: ${props => props.theme.colors.white};
    gap: 1rem;
`

export const SearchInput = styled.input`
    width: 100%;
    border-radius: 8px;
    padding: 1rem 4.5rem;
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.3);
    background-image: url(${svgSearch});
    background-repeat: no-repeat;
    background-size: 2rem;
    background-position: 1.3rem;

    &:focus-visible {
        border: 0;
    }
`;

export const Main = styled.main`
    display: flex;
    padding: 3.5rem 2rem;
    
h1 {
    flex: 1;
}
`

