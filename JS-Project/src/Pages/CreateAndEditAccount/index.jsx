/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import axios from "../../services/axios";
import React, { useState, useEffect } from "react";
import { Container, Title, ProfilePicture } from "./styled";
import { get } from "lodash";
import { useParams } from "react-router-dom";
import { Form, Button } from "./styled";
import { isEmail, isInt, isFloat } from "validator";
import { toast } from "react-toastify";
import Loading from "../../Components/Loading";
import { useDispatch } from "react-redux";
import * as actions from "../../store/modules/auth/actions";
import { FaEdit, FaUserCircle } from "react-icons/fa";

export default function CreateAndEditAccount() {
     const { id } = useParams();
     const [foto, setFoto] = useState("");
     const [nome, setNome] = useState("");
     const [sobrenome, setSobrenome] = useState("");
     const [email, setEmail] = useState("");
     const [idade, setIdade] = useState("");
     const [peso, setPeso] = useState("");
     const [altura, setAltura] = useState("");
     const [isLoading, setIsLoading] = useState(false);
     const navigate = useNavigate();
     const dispatch = useDispatch();

     useEffect(() => {
          if (!id) return;

          async function getConta() {
               try {
                    setIsLoading(true);
                    //pesquisar um usuario
                    const { data } = await axios.get(`/contas/${id}`);

                    setNome(data.nome);
                    setSobrenome(data.sobrenome);
                    setEmail(data.email);

                    setIsLoading(false);
               } catch (err) {
                    setIsLoading(false);

                    const status = get(err, "response.status", 0);
                    const errors = get(err, "response.data.error", []);

                    if (status === 400) {
                         errors.map((error) => toast.error(error));
                         return;
                    }
               }
          }
          getConta();
     }, [id]);

     async function handleSubmit(e) {
          e.preventDefault();
          let formErros = false;

          if (nome.length < 3 || nome.length > 255) {
               toast.error("Nome precisa ter entre 3 e 255 caracteres ");
               formErros = true;
          }
          if (sobrenome.length < 3 || sobrenome.length > 255) {
               toast.error("Sobrenome precisa ter entre 3 e 255 caracteres ");
               formErros = true;
          }

          if (!isEmail(email)) {
               toast.error("Email inválido");
               formErros = true;
          }


          if (formErros) return;

          try {
               if (id) {
                    setIsLoading(true);

                    //editar
                    await axios.put(`/contas/${id}`, {
                         nome,
                         sobrenome,
                         email,
                    });
                    toast.success("Conta editada com sucesso");
                    setIsLoading(false);

                    navigate("/contas");
               } else {
                    setIsLoading(true);

                    //criar conta
                    await axios.post(`/contas/create/`, {
                         nome,
                         sobrenome,
                         email,
                    });

                    navigate("/contas");
                    toast.success("Conta criado com sucesso");
                    setIsLoading(false);
               }
          } catch (err) {
               setIsLoading(false);

               const status = get(err, "response.status", 0);
               const errors = get(err, "response.data.errors", []);

               if (errors) {
                    errors.map((error) => toast.error(error));
               } else {
                    toast.error("Erro desconhecido");
               }

               if (status === 401) dispatch(actions.loginFailure());
          }
     }

     return (
          <Container>
               <Loading isLoading={isLoading} />

               <Form onSubmit={handleSubmit}>
                    <Title>{id ? "Editar Cohta" : "Nova Conta"}</Title>

                    <label name="nome">
                         Dono da conta
                         <input
                              type="text"
                              value={nome}
                              onChange={(e) => setNome(e.target.value)}
                              placeholder="Dono da conta"
                         />
                    </label>

                    <label name="sobrenome">
                         login da conta
                         <input
                              type="text"
                              value={sobrenome}
                              onChange={(e) => setSobrenome(e.target.value)}
                              placeholder="login da conta"
                         />
                    </label>

                    <label name="email">
                         senha da conta
                         <input
                              type="text"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="senha da conta"
                         />
                    </label>

                    <Button type="submit">
                         {id ? "Editar Conta" : "Criar nova Conta"}
                    </Button>
               </Form>
          </Container>
     );
}
