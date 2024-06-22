import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styled';

const Admin: React.FC = () => {
    return (
        <Container>
            <h1>Bem vindo ao painel de admin dashboard</h1>
            <p>Gerenciamento de usuarios, listagem, quantidade de conta cadastrada</p>
            <div>
                <Link to="/admin/dashboard">Dashboard </Link>
            </div>

            <div>
                <Link to="/admin/logs">Logs</Link>
            </div>
            <div>
                <Link to="/admin/users">Trazer todos usuarios</Link>
            </div>
            <div>{/* <Link to="/admin/user/edit/:id">Edit</Link> */}</div>
        </Container>
    );
};

export default Admin;
