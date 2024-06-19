/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Form, Title, Button, Conteudo } from "./styled";
import { isEmail } from "validator";
import { toast } from "react-toastify";
import axios from "../../../services/axios";
import { get } from "lodash";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Components/Loading";

export default function Register() {
     const [isLoading, setIsLoading] = useState(false);
     const [nome, setNome] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const navigate = useNavigate();

     async function handleSubmit(e) {
          e.preventDefault();

          let formErros = false;

          if (nome.length < 3 || nome.length > 255) {
               formErros = true;
               toast.error("Nome precisa ter entre 3 e 255 caracteres ");
          }

          if (!isEmail(email)) {
               formErros = true;
               toast.error("Email inválido");
          }

          if (password.length < 6 || password.length > 50) {
               formErros = true;
               toast.error("A senha precisa ter entre 6 a 50 caracteres");
          }

          if (formErros) return;
          setIsLoading(true);
          try {
               await axios.post("/users/", {
                    nome,
                    email,
                    password,
               });
               toast.success("Usuário criado com sucesso");
               setIsLoading(false);

               navigate("/login");
          } catch (err) {
               const errors = get(err, "response.data.errors", []);
               errors.map((error) => toast.error(error));
               setIsLoading(false);
          }
     }

     return (
          <Container>
               <Loading isLoading={isLoading} />
               <Conteudo>
                    <Form onSubmit={handleSubmit}>
                         <h1>Cadastrar novo usuario para o sistema</h1>

                         <label name="nome">
                              Digite seu Nome {}
                              <input
                                   type="text"
                                   value={nome}
                                   onChange={(e) => setNome(e.target.value)}
                                   placeholder="Digite seu Nome"
                              />
                         </label>
                         <label name="email">
                              Digite seu E-mail
                              <input
                                   type="text"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   placeholder="Digite seu Email"
                              />
                         </label>
                         <label name="password">
                              Digite sua Senha
                              <input
                                   type="password"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                                   placeholder="Digite sua Senha"
                              />
                         </label>
                         <Button type="submit">Criar minha conta</Button>
                    </Form>
               </Conteudo>
          </Container>
     );
}
