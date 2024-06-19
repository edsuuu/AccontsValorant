import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import Perfil from "../Pages/Profile";
import Redirect from "../Pages/Redirect";
import Pagina404 from "../Pages/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import Contas from "../Pages/Contas";
import CreateAndEditAccount from "../Pages/CreateAndEditAccount";
import AdminPanel from "../Pages/Admin";
import Unauthorized from "../Pages/Unauthorized";

export function AppRoutes() {
     return (
          <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/login" element={<Login />} />
               <Route path="/redirect" element={<Redirect />} />
               <Route path="/unauthorized" element={<Unauthorized />} />

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
               <Route
                    path="/admin"
                    element={
                         <PrivateRoute
                              isClosed={true}
                              requiredPermission="admin"
                         >
                              {() => <AdminPanel />}
                         </PrivateRoute>
                    }
               />

               <Route path="*" element={<Pagina404 />} />
          </Routes>
     );
}

export default AppRoutes;
