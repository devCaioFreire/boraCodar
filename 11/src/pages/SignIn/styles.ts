import styled from "styled-components";
import { darkTheme, lightTheme } from "../../styles/theme/Theme";

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 384px;
    margin: 1rem;

h1 {
    font-size: 2.25rem;
    color: ${(props) =>
        props.theme === lightTheme
            ? props.theme.colors.darkH1
            : props.theme.colors.lightH1};
}

p {
    color: ${(props) =>
        props.theme === lightTheme
            ? props.theme.colors.text
            : props.theme.colors.text};
}

a {
    text-decoration: none;
    font-weight: bold;
    color: ${(props) =>
        props.theme === darkTheme
            ? props.theme.colors.purple
            : props.theme.colors.lightPurple}
}
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    margin-top: 2.5rem;

label {
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: ${(props) =>
        props.theme === lightTheme
            ? props.theme.colors.lightH1
            : props.theme.colors.darkH1};
}
`
export const BasedInput = styled.input`
    padding: 1rem;
    border-radius: 4px;
    background: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors["gray-200"]};
    margin-bottom: 1rem;
`
export const InputMail = styled(BasedInput)`
    flex: 1;
`

export const PasswordContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
`

export const InputPassword = styled(BasedInput)`
    flex: 1;
    margin-bottom: 2rem;
`

export const ButtonSubmit = styled.button`
    flex: 1;
    padding: 1.5rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 4px;
    margin-bottom: 2rem;
    background-color: ${(props) => props.theme.colors.purple};
    color: ${(props) => props.theme.colors.white}
`


