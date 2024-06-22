import React from 'react';
import { Container, Conteudo } from './styled';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
    return (
        <Container>
            <Conteudo>
                <h1>Essa página que você tentou acessar não existe.</h1>
                <h1>Error 404</h1>
                <Link to="/">Voltar</Link>
            </Conteudo>
        </Container>
    );
};

export default NotFoundPage;
