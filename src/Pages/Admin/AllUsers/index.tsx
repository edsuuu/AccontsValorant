import { toast } from 'react-toastify';
import React, { useEffect, useState } from 'react';
import { ContaContainer, Botoes, Container, Profile, Title } from './styled.tsx';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaEdit, FaWindowClose, FaExclamation } from 'react-icons/fa';
import * as actions from '../../../store/modules/auth/actions';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store';
import Loading from '../../../Components/Loading';
import API_URL from '../../../services/axios.ts';

interface User {
    _id: string;
    nome: string;
    email: string;
    login: string;
    permission: string;
}

const AllUser: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        async function getAllUsers() {
            try {
                setIsLoading(true);
                const response = await API_URL.get('/admin/users');
                setUsers(response.data);
                console.log(response);

                setIsLoading(false);
            } catch (e) {
                const status = get(e, 'response.status', 0) as number;

                if (status === 401) {
                    toast.error('Você precisa fazer login');
                }

                dispatch(actions.loginFailure({ error: 'Unauthorized' }));
                navigate('/');

                setIsLoading(false);
            }
        }

        getAllUsers();
    }, [dispatch, navigate]);

    const handleDeleteAsk = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const exclamation = (e.currentTarget.nextSibling as HTMLElement) || null;
        if (exclamation) {
            exclamation.style.display = 'block';
            e.currentTarget.remove();
        }
    };

    const handleDelete = async (e: React.MouseEvent<SVGElement, MouseEvent>, id: string, index: number) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            await API_URL.delete(`/admin/user/${id}`);
            const novasContas = [...users];
            novasContas.splice(index, 1);
            setUsers(novasContas);

            toast.success('Conta deletada com sucesso');
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            const status = get(err, 'response.status', 0) as number;

            if (status === 401) {
                toast.error('Você precisa fazer login');
            }

            if (status === 400) {
                const errors = get(err, 'response.data.errors', []) as string[];
                errors.forEach((error) => toast.error(error));
                return;
            }

            const errors = get(err, 'response.data.error', 'Erro desconhecido') as unknown as string[];
            errors.forEach((error) => toast.error(error));
        }
    };

    return (
        <Container>
            <Loading isLoading={isLoading} />
            <Title>
                <h1>Todos Usuarios cadastrados</h1>
                <Link to={`/admin/user/register`}>
                    <FaEdit /> Criar novo usuario
                </Link>
            </Title>

            <ContaContainer>
                {users.map((user, index) => (
                    <Profile id={user._id} key={user._id}>
                        <div>
                            <h4>Nome</h4>
                            <span>{user.nome}</span>
                        </div>
                        <div>
                            <h4>Email</h4>
                            <span>{user.email}</span>
                        </div>
                        <div>
                            <h4>Login</h4>
                            <span>{user.login}</span>
                        </div>
                        <div>
                            <h4>Permission</h4>
                            <span>{user.permission}</span>
                        </div>
                        <small>bug na rota de deletar ver comentario</small>
                        {/*  verificar os index e ver qual q está apagando pois ta apagando o dado errado */}
                        <Botoes>
                            <Link className="editar" to={`/admin/user/edit/${user._id}`}>
                                <FaEdit size={30} />
                            </Link>

                            <Link className="deletar" onClick={handleDeleteAsk} to={''}>
                                <FaWindowClose size={30} />
                            </Link>

                            <FaExclamation
                                onClick={(e) => handleDelete(e, user._id, index)}
                                size={30}
                                style={{ display: 'none' }}
                                cursor="pointer"
                                className="deletarWarn"
                            />
                        </Botoes>
                    </Profile>
                ))}
            </ContaContainer>
        </Container>
    );
};

export default AllUser;
