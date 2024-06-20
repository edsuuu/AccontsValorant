import { FaHome, FaSignInAlt, FaUserAlt, FaUser, FaUsers } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Nav, Lista, Icon, Title, Sair } from './styled';
import { Link } from 'react-router-dom';
import * as actions from '../../store/modules/auth/actions';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AppDispatch } from '../../store';

const Navigation = () => {
    const { user, isLoggedIn } = useSelector((state: any) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const handleLogout = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        dispatch(actions.loginFailure({ error: 'Unauthorized' }));
        navigate('/');
        toast.info('Você fez Logout no Sistema', { theme: 'colored' });
    };

    const rotas = [
        { name: 'Home', to: '/', icon: <FaHome size={20} /> },

        {
            name: 'Login',
            to: '/login',
            icon: <FaUserAlt />,
            hidden: isLoggedIn,
        },

        {
            name: 'Contas',
            to: '/contas',
            icon: <FaUsers size={20} />,
            hidden: !isLoggedIn,
        },
        {
            name: 'Perfil',
            to: '/perfil',
            icon: <FaUser size={16} />,
            hidden: !isLoggedIn,
        },
    ];

    return (
        <Nav>
            <Title>{isLoggedIn && <h1>Bem vindo! {user.nome}</h1>}</Title>

            <Lista>
                {rotas.map(
                    (rota, index) =>
                        // renderiza apenas a rota se não estiver marcada como oculta
                        !rota.hidden && (
                            <li key={index}>
                                <Link to={rota.to}>
                                    {rota.icon && <Icon>{rota.icon}</Icon>}
                                    {rota.name}
                                </Link>
                            </li>
                        ),
                )}
                {user.permission === 'admin' && <Link to="/admin">Painel Admin</Link>}
            </Lista>

            <Sair>
                {isLoggedIn && (
                    <Link to={''} onClick={handleLogout}>
                        <FaSignInAlt />
                        Sair
                    </Link>
                )}
            </Sair>
        </Nav>
    );
};

export default Navigation;
