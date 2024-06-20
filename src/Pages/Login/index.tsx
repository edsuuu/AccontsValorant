import React, { useState, useEffect, FormEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Form, Title, Button, Conteudo } from './styled';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import Loading from '../../Components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';
import { RootState } from '../../store/modules/rootReducer';
import { AppDispatch } from '../../store'; 

const Login: React.FC = () => {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
    const isLoading = useSelector((state: RootState) => state.auth.isLoading);
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch<AppDispatch>();

    const prevPath = get(location, 'state.prevPath', '/');

    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        let formErrors = false;

        if (login.length < 3 || login.length > 10) {
            formErrors = true;
            toast.error('Login inválido');
        }

        if (password.length < 6 || password.length > 50) {
            formErrors = true;
            toast.error('Senha inválida');
        }

        if (formErrors) return;

        dispatch(actions.loginRequest({ login, password, prevPath }));
    };

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/contas');
        }
    }, [isLoggedIn, navigate]);

    return (
        <Container>
            <Loading isLoading={isLoading} />
            <Conteudo>
                <Form onSubmit={handleSubmit}>
                    <Title>Página Login</Title>
                    <label htmlFor="login">
                        Digite seu Login
                        <input
                            type="text"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            placeholder="Digite seu Login"
                        />
                    </label>
                    <label htmlFor="password">
                        Digite a sua Senha
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Digite a sua Senha"
                        />
                    </label>
                    <Button type="submit">Entrar</Button>
                </Form>
            </Conteudo>
        </Container>
    );
};

export default Login;
