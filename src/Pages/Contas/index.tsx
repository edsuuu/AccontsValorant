import { toast } from 'react-toastify';
import React, { useEffect, useState } from 'react';
import { Container, Title, CardAccoutsContainer } from './styled';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaEdit } from 'react-icons/fa';
import * as actions from '../../store/modules/auth/actions';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import Loading from '../../Components/Loading';
// import CardAcconts from '../../Components/CardAcconts';
import API_URL from '../../services/axios';
import CardComponent from '../../Components/CardComponent';

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
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        async function getContas() {
            try {
                setIsLoading(true);
                const response = await API_URL.get('/contas');
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
            // bug no elemento html de exclamacao, quando apaga o index da frente ele nao atualiza
        }
    };

    const handleDelete = async (e: React.MouseEvent<SVGElement, MouseEvent>, id: string, index: number) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            await API_URL.delete(`/contas/${id}`);
            const novasContas = [...contas];
            novasContas.splice(index, 1);
            setContas(novasContas);
            setIsLoading(false);

            toast.success('Conta deletada com sucesso');
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
            <CardAccoutsContainer>
                {contas.map((conta, index) => (
                    <CardComponent
                        key={index}
                        _id={conta._id}
                        nickName={conta.dono_conta}
                        login={conta.login_conta}
                        senha={conta.senha_conta}
                        onClick={handleDeleteAsk}
                        onClickDelete={(e) => handleDelete(e, conta._id, index)}
                    />
                ))}
            </CardAccoutsContainer>
        </Container>
    );
};

export default Contas;
