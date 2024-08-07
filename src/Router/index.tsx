import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Perfil from '../Pages/Profile';
import Redirect from '../Pages/Redirect';
import PrivateRoute from './PrivateRoute';
import Contas from '../Pages/Contas';
import CreateAndEditAccount from '../Pages/Contas/CreateAndEditAccount';
import AdminPanel from '../Pages/Admin';
import Unauthorized from '../Pages/Unauthorized';
import EditAndDeleteProfile from '../Pages/Profile/EditAndDeleteProfile';
import Pagina404 from '../Pages/NotFoundPage';
import React from 'react';
import EditUser from '../Pages/Admin/EditUser';
import RegisterUser from '../Pages/Admin/RegisterUser';
import AllUser from '../Pages/Admin/AllUsers';

const AppRoutes: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/redirect" element={<Redirect />} />
                <Route path="/unauthorized" element={<Unauthorized />} />
                <Route
                    path="/cadastrar-conta"
                    element={
                        <PrivateRoute isClosed={true}>
                            <CreateAndEditAccount />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/conta/edit/:id"
                    element={
                        <PrivateRoute isClosed={true}>
                            <CreateAndEditAccount />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/contas"
                    element={
                        <PrivateRoute isClosed={true}>
                            <Contas />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/perfil"
                    element={
                        <PrivateRoute isClosed={true}>
                            <Perfil />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/perfil-edit"
                    element={
                        <PrivateRoute isClosed={true}>
                            <EditAndDeleteProfile />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/admin"
                    element={
                        <PrivateRoute isClosed={true} requiredPermission="admin">
                            <AdminPanel />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/admin/user/register"
                    element={
                        <PrivateRoute isClosed={true} requiredPermission="admin">
                            <RegisterUser />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/admin/user/edit/:id"
                    element={
                        <PrivateRoute isClosed={true} requiredPermission="admin">
                            <EditUser />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/admin/users"
                    element={
                        <PrivateRoute isClosed={true} requiredPermission="admin">
                            <AllUser />
                        </PrivateRoute>
                    }
                />

                <Route path="*" element={<Pagina404 />} />
            </Routes>
        </>
    );
};

export default AppRoutes;
