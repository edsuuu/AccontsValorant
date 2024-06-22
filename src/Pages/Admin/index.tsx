import React from 'react';
import { Link } from 'react-router-dom';

const Admin: React.FC = () => {
    return (
        <div>
            <h1>Bem vindo ao painel de admin dashboard</h1>
            <p>Gerenciamento de usuarios, listagem, quantidade de conta cadastrada</p>
            <h1>
                <Link to="/admin/logs">Logs</Link>
            </h1>
            <h1>
                <Link to="/admin/users">Trazer todos usuarios</Link>
            </h1>
            <br />
            <h1>
                <Link to="/admin/user/register">Register</Link>
            </h1>
            <br />
            <h1>
                <Link to="/admin/user/edit/:id">Edit</Link>
            </h1>
            <br />
            <h1>
                <Link to="/admin/dashboard">Dashboard </Link>
            </h1>
        </div>
    );
};

export default Admin;
