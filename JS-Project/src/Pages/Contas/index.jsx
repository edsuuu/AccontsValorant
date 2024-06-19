import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import { ContaContainer, Botoes, Container, Profile, Title } from "./syled";
import { Link } from "react-router-dom";
import { get } from "lodash";
import {
     FaUserCircle,
     FaEdit,
     FaWindowClose,
     FaExclamation,
} from "react-icons/fa";
import axios from "../../services/axios";
import * as actions from "../../store/modules/auth/actions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loading from "../../Components/Loading";

export default function Contas() {
     const [contas, setContas] = useState([]);
     const [isLoading, setIsLoading] = useState(false);
     const navigate = useNavigate();
     const dispatch = useDispatch();

     useEffect(() => {
          async function getContas() {
               try {
                    setIsLoading(true);
                    const response = await axios.get("/contas");
                    setContas(response.data);
                    setIsLoading(false);
               } catch (e) {
                    const status = get(e, "response.status", 0);

                    if (status === 401) {
                         toast.error("Você precisa fazer login");
                    }

                    dispatch(actions.loginFailure());
                    navigate("/");

                    setIsLoading(false);
               }
          }

          getContas();
     }, [dispatch, navigate]);

     const handleDeleteAsk = (e) => {
          e.preventDefault();
          const exclamation = e.currentTarget.nextSibling;

          exclamation.setAttribute("display", "block");
          e.currentTarget.remove();
     };

     const handleDelete = async (e, id, index) => {
          try {
               setIsLoading(true);

               await axios.delete(`/contas/${id}`);
               const novasContas = [...contas];
               novasContas.splice(index, 1);
               setContas(novasContas);

               toast.success("Conta deletada com sucesso");

               setIsLoading(false);
          } catch (err) {
               setIsLoading(false);
               const status = get(err, "response.status", 0);

               if (status === 401) {
                    toast.error("Você precisa fazer login");
               }

               if (status === 400) {
                    const errors = get(err, "response.data.errors", []);
                    errors.map((error) => toast.error(error));
                    return;
               }

               const errors = get(
                    err,
                    "response.data.error",
                    "Erro desconhecido",
                    []
               );
               errors.map((error) => toast.error(error));
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
                    {contas.map((contas, index) => (
                         <Profile id={contas._id} key={index}>
                              {<FaUserCircle size={50} cursor="normal" />}
                              <div>
                                   <h4>Dono da Conta</h4>
                                   <span>{contas.dono_conta}</span>
                              </div>

                              <div>
                                   <h4>Login da conta</h4>
                                   <span>{contas.login_conta}</span>
                              </div>

                              <div>
                                   <h4>Senha da conta</h4>
                                   <span>{contas.senha_conta}</span>
                              </div>
                              <Botoes>
                                   <Link
                                        className="editar"
                                        to={`/conta/${contas._id}/edit`}
                                   >
                                        <FaEdit size={30} />
                                   </Link>

                                   <Link
                                        className="deletar"
                                        onClick={handleDeleteAsk}
                                        to={`/contas/${contas._id}/delete`}
                                   >
                                        <FaWindowClose size={30} />
                                   </Link>

                                   <FaExclamation
                                        onClick={(e) =>
                                             handleDelete(e, contas._id, index)
                                        }
                                        size={30}
                                        display="none"
                                        cursor="pointer"
                                        className="deletarWarn"
                                   />
                              </Botoes>
                         </Profile>
                    ))}
               </ContaContainer>
          </Container>
     );
}
