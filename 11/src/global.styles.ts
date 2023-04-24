import { createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme/Theme";

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus {
    outline: 0;
    box-shadow:  0 0 0 2px ${(props) => props.theme.colors.purple};
    border-radius: 4px;   
}

a, ul {
    text-decoration: none;
    text-transform: none;
    list-style: none;
}

body {
    background: ${(props) =>
      props.theme === lightTheme
        ? props.theme.colors.lightBackground
        : props.theme.colors.darkBackground};
}

body, input {
    font-family: 'Titillium Web', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    outline: 0;
    border: 0;
}

h1, label {
    color: ${(props) =>
      props.theme === lightTheme
        ? props.theme.colors.lightH1
        : props.theme.colors.darkH1} !important;
}

button {
    outline: 0;
    border: 0;
    background: none;
    cursor: pointer;
}

  * {
    scrollbar-width: auto;
    scrollbar-color: #7c3aed #e2d6ff;
  }

  *::-webkit-scrollbar {
    width: 5px;
  }

  *::-webkit-scrollbar-track {
    background: ${(props) =>
      props.theme === lightTheme
        ? props.theme.colors.lightBackground
        : props.theme.colors.darkBackground};
  }

  *::-webkit-scrollbar-thumb {
    background-color: #7c3aed;
    border-radius: 1px;
  }
`;
