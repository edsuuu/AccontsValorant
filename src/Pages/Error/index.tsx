import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styled';

const Error404: React.FC = () => {
    return (
        <Container>
            <h1>Página não existe</h1>
            <Link to="/">Voltar</Link>
        </Container>
    );
};

export default Error404;
