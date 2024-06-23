/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector, useDispatch } from 'react-redux';
import { Nav, Lista, Title } from './styled';
import { Link } from 'react-router-dom';
import * as actions from '../../store/modules/auth/actions';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AppDispatch } from '../../store';
import React from 'react';

const Navigation: React.FC = () => {
    const { user, isLoggedIn } = useSelector((state: any) => state.auth);
    const teste = useSelector((state: any) => console.log(state));
    console.log(teste);

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const handleLogout = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        dispatch(actions.loginFailure({ error: 'Unauthorized' }));
        navigate('/');
        toast.info('Você fez Logout no Sistema', { theme: 'colored' });
    };

    return (
        <Nav>
            <Title>{isLoggedIn && <h2>Bem vindo! {user.nome}</h2>}</Title>

            <Lista>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>

                {isLoggedIn === false && (
                    <li>
                        <Link to={'/login'}>Login</Link>
                    </li>
                )}
                {isLoggedIn === true && (
                    <>
                        <li>
                            <Link to={'/contas'}>Contas Valorant</Link>
                            <ul>
                                <li>
                                    <Link to={'/cadastrar-conta'}>Criar Nova Conta</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to={'/perfil'}>Meu Perfil</Link>
                            <ul>
                                <li>
                                    <a href="#">Editar Perfil</a>
                                </li>
                            </ul>
                        </li>
                    </>
                )}

                {user.permission === 'admin' && (
                    <li>
                        <Link to="/admin">Painel Admin</Link>
                        <ul>
                            <li>
                                <a href="#">Criar User</a>
                            </li>
                            <li>
                                <a href="#">Listar Users</a>
                            </li>
                            <li>
                                <a href="#">Logs</a>
                            </li>
                        </ul>
                    </li>
                )}
                {isLoggedIn && (
                    <li>
                        <Link to={''} onClick={handleLogout}>
                            Sair da sua Conta
                        </Link>
                    </li>
                )}
            </Lista>
        </Nav>
    );
};

export default Navigation;
