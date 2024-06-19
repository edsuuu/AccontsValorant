import React from "react";
import {
     FaHome,
     FaSignInAlt,
     FaUserAlt,
     FaUser,
     FaUsers,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Nav, Lista, Icon, Title, Sair } from "./styled";
import { Link } from "react-router-dom";
import * as actions from "../../store/modules/auth/actions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navigation = () => {
     const { user, isLoggedIn } = useSelector((state) => state.auth);

     const navigate = useNavigate();
     const dispatch = useDispatch();

     const handleLogout = (e) => {
          e.preventDefault();
          dispatch(actions.loginFailure());
          navigate("/");
          toast.info("Você fez Logout no Sistema", { theme: "colored" });
     };

     const rotas = [
          { name: "Home", to: "/", icon: <FaHome size={20} /> },
          {
               name: "Login",
               to: "/login",
               icon: <FaUserAlt />,
               hidden: isLoggedIn,
          },
          // {
          //      name: "Registre-se",
          //      to: "/register",
          //      icon: <IoNewspaper size={18} />,
          //      hidden: isLoggedIn,
          // },
          {
               name: "Contas",
               to: "/contas",
               icon: <FaUsers size={20} />,
               hidden: !isLoggedIn,
          },
          {
               name: "Perfil",
               to: "/perfil",
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
                                             {rota.icon && (
                                                  <Icon>{rota.icon}</Icon>
                                             )}
                                             {rota.name}
                                        </Link>
                                   </li>
                              )
                    )}
               </Lista>

               <Sair>
                    {isLoggedIn && (
                         <Link onClick={handleLogout}>
                              <FaSignInAlt />
                              Sair
                         </Link>
                    )}
               </Sair>
          </Nav>
     );
};

export default Navigation;
