import React from 'react';
import { Container } from './styled';

const Home: React.FC = () => {
    return (
        <Container>
            <div className="image">
                <img
                    src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1d62a3751be9d7abfce84da8ca89be7d79f07fed-1232x1232.png?auto=format&fit=fill&q=80&w=728"
                    alt="reyna_raze"
                />
            </div>
            <h1>Bem vindo</h1>
            <img
                src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7b76209193f1bfe190d3ae6ef8728328870be9c3-736x138.png?auto=format&fit=fill&q=80&w=300"
                alt="valorant"
            />
            <h2>Accounts</h2>
        </Container>
    );
};

export default Home;
