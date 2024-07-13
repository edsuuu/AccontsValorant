import React, { useState, useEffect, FormEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container } from './styled';
import { toast } from 'react-toastify';
import { get } from 'lodash';
// import Loading from '../../Components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';
import { RootState } from '../../store/modules/rootReducer';
import { AppDispatch } from '../../store';
import Loading from '../../Components/Loading';

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
            <div className="container" id="container">
                <div className="form-container sign-in-container">
                    <form onSubmit={handleSubmit}>
                        <h1>Entre</h1>

                        <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Digite seu Login" />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Digite a sua Senha" />
                        <a href="#">Esqueceu a senha?</a>
                        <button>Entrar</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Bem vindo de volta!</h1>
                            <p>faça login com suas informações </p>
                            <button className="ghost" id="signIn">
                                Entre
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Amigo!</h1>
                            <p>Insira seus dados </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Login;
