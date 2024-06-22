import React, { useState, FormEvent } from 'react';
import { Container, Form, Button, Conteudo } from './styled';
import { isEmail } from 'validator';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Components/Loading';
import API_URL from '../../../services/axios';

const RegisterUser: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [login, setLogin] = useState<string>('');
    const [permission, setPermission] = useState('');
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

        if (login.length < 6 || login.length > 50) {
            formErros = true;
            toast.error('O login precisa ter entre 6 a 50 caracteres');
        }

        if (password.length < 6 || password.length > 50) {
            formErros = true;
            toast.error('A senha precisa ter entre 6 a 50 caracteres');
        }

        if (formErros) return;
        setIsLoading(true);
        try {
            await API_URL.post('/admin/user/register/', {
                nome,
                email,
                login,
                password,
                permission,
            });
            toast.success('Usuário criado com sucesso');
            setIsLoading(false);

            navigate('/admin');
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
                    <h1>Cadastrar Nova conta</h1>

                    <label htmlFor="nome">
                        Digite o Nome
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite o Nome" />
                    </label>
                    <label htmlFor="email">
                        Digite o E-mail
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite o Email" />
                    </label>
                    <label htmlFor="login">
                        Digite o Login
                        <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Digite o login" />
                    </label>
                    <label>Permissao da conta</label>
                    <select value={permission} onChange={(e) => setPermission(e.target.value)}>
                        <option value="" disabled>
                            Permissao
                        </option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                    <label htmlFor="password">
                        Digite a Senha
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Digite a Senha" />
                    </label>
                    <Button type="submit">Criar conta</Button>
                </Form>
            </Conteudo>
        </Container>
    );
};

export default RegisterUser;
