import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import Perfil from "../Pages/Profile";
// import Register from "../Pages/Register";
import Redirect from "../Pages/Redirect";
import Pagina404 from "../Pages/NotFoundPage";

// import Logado from "../Pages/Logado";
import PrivateRoute from "./PrivateRoute";
import Contas from "../Pages/Contas";
import CreateAndEditAccount from "../Pages/CreateAndEditAccount";

export function AppRoutes() {
     return (
          <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/login" element={<Login />} />
               {/* <Route path="/register" element={<Register />} /> */}
               <Route path="/redirect" element={<Redirect />} />

               <Route
                    path="/cadastrar-conta"
                    element={
                         <PrivateRoute isClosed={true}>
                              {() => <CreateAndEditAccount />}
                         </PrivateRoute>
                    }
               />
               <Route
                    path="/conta/:id/edit"
                    element={
                         <PrivateRoute isClosed={true}>
                              {() => <CreateAndEditAccount />}
                         </PrivateRoute>
                    }
               />
               <Route
                    path="/contas"
                    element={
                         <PrivateRoute isClosed={true}>
                              {() => <Contas />}
                         </PrivateRoute>
                    }
               />

               <Route
                    path="/perfil"
                    element={
                         <PrivateRoute isClosed={true}>
                              {() => <Perfil />}
                         </PrivateRoute>
                    }
               />

               <Route path="*" element={<Pagina404 />} />
          </Routes>
     );
}

export default AppRoutes;
