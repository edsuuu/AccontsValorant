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
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

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
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Crie sua conta!</h1>
                        <div className="social-container">
                            <a href="#" className="social"><FaFacebook /><i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social"><FcGoogle />
                                <i className="fab fa-google-plus-g">
                                </i>
                            </a>
                            <a href="#" className="social"><FaLinkedin />
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                        <span>ou use seu e-mail para cadastro</span>
                        <input type="text" placeholder="Nome" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Senha" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Entre</h1>
                        <div className="social-container">
                        <a href="#" className="social"><FaFacebook />
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social"><FcGoogle />
                                <i className="fab fa-google-plus-g">
                                </i>
                            </a>
                            <a href="#" className="social"><FaLinkedin />
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                        <span> ou use sua conta</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Senha" />
                        <a href="#">Esqueceu a senha?</a>
                        <button>Entrar</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Bem vindo de volta!</h1>
                            <p>Para se manter conectado conosco, faça login com suas informações pessoais</p>
                            <button className="ghost" id="signIn">
                                Sign In
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Amigo!</h1>
                            <p>Einsira seus dados pessoais e comece a jornada conosco</p>
                            <button className="ghost" id="signUp">
                                Entrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Login;
