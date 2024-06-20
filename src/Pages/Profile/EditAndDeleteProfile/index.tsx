import React, { useEffect, useState, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Button, Container, Form, Conteudo, Title, Alerta } from './styled';
import { isEmail } from 'validator';
import Loading from '../../../Components/Loading';
import * as actions from '../../../store/modules/auth/actions';
import { Link, useNavigate } from 'react-router-dom';
import { get } from 'lodash';
import axios from '../../../services/axios';
import { RootState } from '../../../store/modules/rootReducer';
import { AppDispatch } from '../../../store';

const EditAndDeleteProfile: React.FC = () => {
    const user = useSelector((state: RootState) => state.auth.token);
    const id = useSelector((state: RootState) => state.auth.user.id);
    const nomeStorage = useSelector((state: RootState) => state.auth.user.name);
    const loginStorage = useSelector((state: RootState) => state.auth.user.login);
    const emailStorage = useSelector((state: RootState) => state.auth.user.email);
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!id) {
            dispatch(actions.loginFailure({ error: 'Você não está logado' }));
            navigate('/login');
            return toast.error('Você não está logado');
        }

        if (nomeStorage && emailStorage && loginStorage) {
            setNome(nomeStorage);
            setEmail(emailStorage);
            setLogin(loginStorage);
        }
    }, [id, emailStorage, nomeStorage, loginStorage, navigate, dispatch]);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        let formErrors = false;

        if (nome.length < 3 || nome.length > 255) {
            formErrors = true;
            toast.error('Nome precisa ter entre 3 e 255 caracteres ');
        }

        if (!isEmail(email)) {
            formErrors = true;
            toast.error('Email inválido');
        }

        if (login.length < 3 || login.length > 50) {
            formErrors = true;
            toast.error('Login precisa ter entre 3 e 50 caracteres ');
        }

        if (!id && (password.length < 6 || password.length > 50)) {
            formErrors = true;
            toast.error('A senha precisa ter entre 6 a 50 caracteres');
        }

        if (formErrors) return;

        dispatch(actions.updateRequest({ nome, email, password, id }));
    }

    const abrirDialog = () => {
        setDialogOpen(true);
    };

    const fecharDialog = () => {
        setDialogOpen(false);
    };

    const excluirConta = async () => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user}`,
                },
            };

            await axios.delete(`/users`, config);

            dispatch(actions.loginFailure({ error: 'Conta excluída com sucesso' }));

            toast.success('Conta excluída com sucesso');
            setDialogOpen(false);
        } catch (err) {
            setDialogOpen(false);
            setIsLoading(false);

            const status = get(err, 'response.status', 0) as number;
            const errors = get(err, 'response.data.errors', 'Erro Status 500') as unknown as string[];

            if (status === 401) {
                toast.error('Usuário não existe');
                return dispatch(actions.loginFailure({ error: 'Usuário não existe' }));
            }

            errors.map((error) => toast.error(error));
        }
    };

    return (
        <Container>
            <h1>Criar uma página visualização de perfil e deixar essa como edição</h1>

            <Loading isLoading={isLoading} />

            {dialogOpen && (
                <Alerta>
                    <p>Deseja mesmo excluir sua conta?</p>

                    <div>
                        <button className="cancelar" onClick={fecharDialog}>
                            Fechar
                        </button>
                        <button className="excluir" onClick={excluirConta}>
                            Excluir
                        </button>
                    </div>
                </Alerta>
            )}

            <Conteudo>
                <Title>
                    <h1>Edite a sua conta</h1>
                    <Link to={''} onClick={abrirDialog}>Apagar minha conta</Link>
                </Title>
                <Form onSubmit={handleSubmit}>
                    <label htmlFor="nome">
                        Seu Nome
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Digite seu novo Nome"
                        />
                    </label>
                    <label htmlFor="email">
                        Seu E-mail
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu novo E-mail"
                        />
                    </label>
                    <label htmlFor="login">
                        Seu login
                        <input
                            type="text"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            placeholder="Digite seu novo Login"
                        />
                    </label>
                    <label htmlFor="password">
                        Alterar a sua Senha <br />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Digite sua nova Senha"
                        />
                        <small>
                            Ao alterar a senha, você precisa fazer login novamente *
                        </small>
                    </label>
                    <Button type="submit">Editar minha conta</Button>
                </Form>
            </Conteudo>
        </Container>
    );
};

export default EditAndDeleteProfile;
