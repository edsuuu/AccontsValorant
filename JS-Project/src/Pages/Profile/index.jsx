import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Button, Container, Form, Conteudo, Title, Alerta } from "./styled";
import { isEmail } from "validator";
import Loading from "../../Components/Loading";
import * as actions from "../../store/modules/auth/actions";
import { Link, useNavigate } from "react-router-dom";
import { get } from "lodash";
import axios from "../../services/axios";

export default function Perfil() {
     const user = useSelector((state) => state.auth.token);

     const id = useSelector((state) => state.auth.user.id);
     const nomeStorage = useSelector((state) => state.auth.user.nome);
     const emailStorage = useSelector((state) => state.auth.user.email);
     const navigate = useNavigate();
     const dispatch = useDispatch();

     const [nome, setNome] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [dialogOpen, setDialogOpen] = useState(false);
     const [isLoading, setIsLoading] = useState(false);

     useEffect(() => {
          if (!id) {
               dispatch(actions.loginFailure());
               navigate("/login");
               return toast.error("Você não está logado");
          }

          if (nomeStorage && emailStorage) {
               setNome(nomeStorage);
               setEmail(emailStorage);
          }
     }, [id, emailStorage, nomeStorage, navigate, dispatch]);

     function handleSubmit(e) {
          e.preventDefault();

          let formErrors = false;

          if (nome.length < 3 || nome.length > 255) {
               formErrors = true;
               toast.error("Nome precisa ter entre 3 e 255 caracteres ");
          }

          if (!isEmail(email)) {
               formErrors = true;
               toast.error("Email inválido");
          }

          if (!id && (password.length < 6 || password.length > 50)) {
               formErrors = true;
               toast.error("A senha precisa ter entre 6 a 50 caracteres");
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
               // setIsLoading(true);

               const config = {
                    headers: {
                         Authorization: `Bearer ${user}`,
                    },
               };

               await axios.delete(`/users`, config);



               dispatch(actions.loginFailure());

               toast.success("Conta excluída com sucesso");
               setDialogOpen(false);
               // setIsLoading(false);
          } catch (err) {
               setDialogOpen(false);
               setIsLoading(false);

               const status = get(err, "response.status", 0);
               const errors = get(
                    err,
                    "response.data.errors",
                    "Erro Status 500"
               );

               if (status === 401) {
                    toast.error("Usuário não existe")
                    return dispatch(actions.loginFailure());
               };

               errors.map((error) => toast.error(error));
          }
     };

     return (
          <Container>
               <Loading isLoading={isLoading} />

               {dialogOpen && (
                    <Alerta>
                         <p>Deseja mesmo excluir sua conta?</p>

                         <div>
                              <button
                                   className="cancelar"
                                   onClick={fecharDialog}
                              >
                                   Fechar
                              </button>
                              <button
                                   className="excluir"
                                   onClick={excluirConta}
                              >
                                   Excluir
                              </button>
                         </div>
                    </Alerta>
               )}

               <Conteudo>
                    <Title>
                         <h1>Edite a sua conta</h1>
                         <Link onClick={abrirDialog}>Apagar minha conta</Link>
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
                         <label htmlFor="password">
                              Alterar a sua Senha <br />
                              <input
                                   type="password"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                                   placeholder="Digite sua nova Senha"
                              />
                              <small>
                                   Ao alterar a senha, você precisa fazer login
                                   novamente *
                              </small>
                         </label>
                         <Button type="submit">Editar minha conta</Button>
                    </Form>
               </Conteudo>
          </Container>
     );
}
