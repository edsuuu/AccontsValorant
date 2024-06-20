import React from 'react';
import { Container, Conteudo } from './styled';

const NotFoundPage: React.FC = () => {
    return (
        <Container>
            <Conteudo>
                <h1>Essa página que você tentou acessar não existe.</h1>
                <h1>Error 404</h1>
            </Conteudo>
        </Container>
    );
};

export default NotFoundPage;
