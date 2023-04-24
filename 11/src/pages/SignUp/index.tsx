import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ButtonSubmit, Form, InputMail, InputPassword, PasswordContainer, RegisterContainer } from "./styles"
import { auth } from "../../services/firebaseConnection";

export function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    async function handleSubmit(event: any) {
        event.preventDefault();
        const create = createUserWithEmailAndPassword(email, password);

        if (await create) {
            setEmail('')
            setPassword('')
        } else {
            console.error(error)
        }
    }

    return (
        <RegisterContainer>
            <h1>Registre-se e faça parte da nossa plataforma</h1>
            <p>Faça seu registro e começe a desenvolver seus projetos hoje!</p>

            <Form onSubmit={handleSubmit}>
                {/* <label htmlFor="name">Nome</label>
                <InputMail
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e: any) => setName(e.target.value)}
                    required
                /> */}

                <label htmlFor="email">E-mail</label>
                <InputMail
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="email">Senha</label>
                <InputPassword
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e: any) => setPassword(e.target.value)}
                    required
                />

                <ButtonSubmit type="submit">Registrar</ButtonSubmit>
            </Form>
            <p>Já tem uma conta? <Link to={'/'}>Fazer login</Link></p>
        </RegisterContainer>
    )
}