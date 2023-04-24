import { SignIn } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { ButtonSubmit, Form, InputMail, RecoveryContainer } from "./styles"

export function Recovery() {

    function handleSubmit(event: any) {
        event.preventDefault();
    }

    return (
        <RecoveryContainer>
            <h1>Recupere sua senha</h1>
            <p>Recupere sua conta e volte a desenvolver seus projetos.</p>

            <Form onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail</label>
                <InputMail type="email" id="email" />

                <ButtonSubmit type="submit">Recuperar</ButtonSubmit>
            </Form>
            <Link to={'/'}>
                <SignIn size={32} weight="fill" />
                Fazer login
            </Link>
        </RecoveryContainer>
    )
}