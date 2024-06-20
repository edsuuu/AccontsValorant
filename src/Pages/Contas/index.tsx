import { toast } from 'react-toastify';
import React, { useEffect, useState } from 'react';
import { ContaContainer, Botoes, Container, Profile, Title } from './styled';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose, FaExclamation } from 'react-icons/fa';
import axios from '../../services/axios';
import * as actions from '../../store/modules/auth/actions';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';  // Importe o tipo AppDispatch
import Loading from '../../Components/Loading';

// Definindo a interface para a conta
interface Conta {
    _id: string;
    dono_conta: string;
    login_conta: string;
    senha_conta: string;
}

const Contas: React.FC = () => {
    const [contas, setContas] = useState<Conta[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();  // Tipar o dispatch

    useEffect(() => {
        async function getContas() {
            try {
                // setIsLoading(true);
                const response = await axios.get('/contas');
                setContas(response.data);
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

        getContas();
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
            await axios.delete(`/contas/${id}`);
            const novasContas = [...contas];
            novasContas.splice(index, 1);
            setContas(novasContas);

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
                <h1>Contas do Valorant</h1>
                <Link to={`/cadastrar-conta`}>
                    <FaEdit /> Criar nova Conta
                </Link>
            </Title>

            <ContaContainer>
                {contas.map((conta, index) => (
                    <Profile id={conta._id} key={conta._id}>
                        <FaUserCircle size={50} cursor="normal" />
                        <div>
                            <h4>Dono da Conta</h4>
                            <span>{conta.dono_conta}</span>
                        </div>
                        <div>
                            <h4>Login da conta</h4>
                            <span>{conta.login_conta}</span>
                        </div>
                        <div>
                            <h4>Senha da conta</h4>
                            <span>{conta.senha_conta}</span>
                        </div>
                        <Botoes>
                            <Link className="editar" to={`/conta/${conta._id}/edit`}>
                                <FaEdit size={30} />
                            </Link>

                            <Link className="deletar" onClick={handleDeleteAsk} to={`/contas/${conta._id}/delete`}>
                                <FaWindowClose size={30} />
                            </Link>

                            <FaExclamation onClick={(e) => handleDelete(e, conta._id, index)} size={30} style={{ display: 'none' }} cursor="pointer" className="deletarWarn" />
                        </Botoes>
                    </Profile>
                ))}
            </ContaContainer>
        </Container>
    );
};

export default Contas;
