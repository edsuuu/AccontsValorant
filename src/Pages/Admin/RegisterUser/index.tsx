import React, { useState, FormEvent } from 'react';
import { Container, Form, Button, Conteudo } from './styled';
import { isEmail } from 'validator';
import { toast } from 'react-toastify';
import axios from '../../../services/axios';
import { get } from 'lodash';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Components/Loading';

const RegisterUser: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        let formErros = false;

        if (nome.length < 3 || nome.length > 255) {
            formErros = true;
            toast.error('Nome precisa ter entre 3 e 255 caracteres ');
        }

        if (!isEmail(email)) {
            formErros = true;
            toast.error('Email inválido');
        }

        if (password.length < 6 || password.length > 50) {
            formErros = true;
            toast.error('A senha precisa ter entre 6 a 50 caracteres');
        }

        if (formErros) return;
        setIsLoading(true);
        try {
            await axios.post('/users/', {
                nome,
                email,
                password,
            });
            toast.success('Usuário criado com sucesso');
            setIsLoading(false);

            navigate('/login');
        } catch (err) {
            const errors = get(err, 'response.data.errors', []) as string[];
            errors.map((error) => toast.error(error));
            setIsLoading(false);
        }
    }

    return (
        <Container>
            <Loading isLoading={isLoading} />
            <Conteudo>
                <Form onSubmit={handleSubmit}>
                    <h1>Cadastrar novo usuario para o sistema</h1>

                    <label htmlFor="nome">
                        Digite seu Nome
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite seu Nome" />
                    </label>
                    <label htmlFor="email">
                        Digite seu E-mail
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu Email" />
                    </label>
                    <label htmlFor="password">
                        Digite sua Senha
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua Senha" />
                    </label>
                    <Button type="submit">Criar minha conta</Button>
                </Form>
            </Conteudo>
        </Container>
    );
};

export default RegisterUser;
