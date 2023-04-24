import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ButtonSubmit, Form, InputMail, InputPassword, LoginContainer, PasswordContainer } from "./styles"
import { auth } from "../../services/firebaseConnection";

export function SignIn() {

    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    async function handleSignIn(event: any) {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(email, password);
            navigate('/dashboard');
          } catch (error) {
            console.error(error);
          }
    }

    return (
        <LoginContainer>
            <h1>Acesse a plataforma</h1>
            <p>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</p>

            <Form onSubmit={handleSignIn}>
                <label htmlFor="email">E-mail</label>
                <InputMail
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                />

                <PasswordContainer>
                    <label htmlFor="email">Senha</label>
                    <Link to={'/recovery'}>Esqueceu a senha?</Link>
                </PasswordContainer>
                <InputPassword
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e: any) => setPassword(e.target.value)} />

                <ButtonSubmit type="submit">Entrar</ButtonSubmit>
            </Form>
            <p>Ainda não tem uma conta? <Link to={'/register'}>Inscreva-se</Link></p>
        </LoginContainer>
    )
}