/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import axios from "../../../services/axios";
import { useState, useEffect, FormEvent } from "react";
import { Container, Title } from "./styled";
import { get } from "lodash";
import { useParams } from "react-router-dom";
import { Form, Button } from "./styled";
import { toast } from "react-toastify";
import Loading from "../../../Components/Loading";
import { useDispatch } from "react-redux";
import * as actions from "../../../store/modules/auth/actions";
import { AppDispatch } from "../../../store";

export default function CreateAndEditAccount() {
    const { id } = useParams();
    const [dono_conta, setDonoConta] = useState("");
    const [login_conta, setLoginConta] = useState("");
    const [senha_conta, setSenhaConta] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (!id) return;

        async function getConta() {
            try {
                setIsLoading(true);
                //pesquisar um usuario
                const { data } = await axios.get(`/contas/${id}`);
                setDonoConta(data.dono_conta);
                setLoginConta(data.login_conta);
                setSenhaConta(data.senha_conta);

                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);

                const status = get(err, "response.status", 0) as number;
                const errors = get(err, "response.data.error", []);

                if (status === 400) {
                    errors.map((error) => toast.error(error));
                    return;
                }
            }
        }
        getConta();
    }, [id]);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        let formErros = false;

        if (dono_conta.length < 3 || dono_conta.length > 255) {
            toast.error("Dono da conta precisa ter entre 3 e 255 caracteres ");
            formErros = true;
        }
        if (login_conta.length < 3 || login_conta.length > 255) {
            toast.error("Login da conta precisa ter entre 3 e 255 caracteres ");
            formErros = true;
        }
        if (senha_conta.length < 3 || senha_conta.length > 255) {
            toast.error("Senha da conta precisa ter entre 3 e 255 caracteres ");
            formErros = true;
        }

        if (formErros) return;

        try {
            if (id) {
                setIsLoading(true);

                //editar
                await axios.put(`/contas/${id}`, {
                    dono_conta,
                    login_conta,
                    senha_conta,
                });
                toast.success("Conta editada com sucesso");
                setIsLoading(false);

                navigate("/contas");
            } else {
                setIsLoading(true);

                //criar conta
                await axios.post(`/contas/`, {
                    dono_conta,
                    login_conta,
                    senha_conta,
                });

                navigate("/contas");
                toast.success("Conta criado com sucesso");
                setIsLoading(false);
            }
        } catch (err) {
            setIsLoading(false);

            const status = get(e, 'response.status', 0) as number;
            const errors = get(err, "response.data.errors", []);

            if (errors) {
                errors.map((error) => toast.error(error));
            } else {
                toast.error("Erro desconhecido");
            }

            if (status === 401) dispatch(actions.loginFailure({error: 'Unauthorized'}));
        }
    }

    return (
        <Container>
            <Loading isLoading={isLoading} />

            <Form onSubmit={handleSubmit}>
                <Title>{id ? "Editar Conta" : "Nova Conta"}</Title>

                <label htmlFor="dono_conta">
                    Dono da conta
                    <input
                        type="text"
                        value={dono_conta}
                        onChange={(e) => setDonoConta(e.target.value)}
                        placeholder="Dono da conta"
                    />
                </label>

                <label htmlFor="login_conta">
                    login da conta
                    <input
                        type="text"
                        value={login_conta}
                        onChange={(e) => setLoginConta(e.target.value)}
                        placeholder="Login da conta"
                    />
                </label>

                <label htmlFor="senha_conta">
                    senha da conta
                    <input
                        type="text"
                        value={senha_conta}
                        onChange={(e) => setSenhaConta(e.target.value)}
                        placeholder="Senha da conta"
                    />
                </label>

                <Button type="submit">
                    {id ? "Editar Conta" : "Criar nova Conta"}
                </Button>
            </Form>
        </Container>
    );
}
