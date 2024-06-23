import React from 'react';
import { Container, Content, DadosContas, Login, Nome, Senha, UserIcon } from './styled';
import { toast } from 'react-toastify';
interface CardAccontsprops {
    nome: string;
    login: string;
    senha: string;
}

const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copiado para a área de transferência');
};

const CardAcconts: React.FC<CardAccontsprops> = ({ nome, login, senha}) => {
    return (
        <Container>
            <Content>
                <UserIcon></UserIcon>
                <DadosContas>
                    <Nome>
                        {nome}
                        <button onClick={() => copyToClipboard(nome)}>Copiar</button>
                    </Nome>
                    <Login>
                        {login}
                        <button onClick={() => copyToClipboard(login)}>Copiar</button>
                    </Login>
                    <Senha>
                        {senha}
                        <button onClick={() => copyToClipboard(senha)}>Copiar</button>
                    </Senha>
                </DadosContas>
            </Content>
        </Container>
    );
};

export default CardAcconts;
