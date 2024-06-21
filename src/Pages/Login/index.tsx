import React, { useState, useEffect, FormEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Title } from './styled';
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
            <div>
            <form action="#">
                <h1>Entre na sua conta!</h1>
                <div className="social-container">
                    <a href="#" className="social">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social">
                        <i className="fab fa-google-plus-g"></i>
                    </a>
                    <a href="#" className="social">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
                <span>ou use seu e-mail para cadastro</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
                </form>
            </div>
            <div className='overlay'>
                <div className='overlay-panel' >
                    <h1>Bem vindo de volta!</h1>

                </div>

            </div>


            {/* <Loading isLoading={isLoading} />
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
            </Conteudo> */}
        </Container>
    );
};

export default Login;
