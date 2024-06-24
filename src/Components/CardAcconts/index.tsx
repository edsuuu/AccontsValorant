import React from 'react';
import { Botoes, Container, Content, DadosContas, Login, NomeDoDono, Senha, UserIcon } from './styled';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FaEdit, FaExclamation, FaWindowClose } from 'react-icons/fa';
interface CardAccontsProps {
    _id: string;
    nomeDoDono: string;
    login: string;
    senha: string;
    onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    onClickDelete: (e: React.MouseEvent<SVGElement, MouseEvent>) => void;
}

const copyToClipboard = (text: string, nameItem: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${nameItem} foi Copiado para a área de transferência`);
};

const CardAcconts: React.FC<CardAccontsProps> = ({ nomeDoDono, login, senha, _id, onClick, onClickDelete }) => {
    return (
        <Container>
            <Content>
                <UserIcon></UserIcon>
                <DadosContas>
                    <NomeDoDono>{nomeDoDono}</NomeDoDono>
                    <Login>
                        {login}
                        <button onClick={() => copyToClipboard(login, 'Login')}>Copiar</button>
                    </Login>
                    <Senha>
                        {senha}
                        <button onClick={() => copyToClipboard(senha, 'Senha')}>Copiar</button>
                    </Senha>
                </DadosContas>
                <Botoes>
                    <Link className="editar" to={`/conta/edit/${_id}`}>
                        <FaEdit size={30} />
                    </Link>
                    <Link className="deletar" onClick={onClick} to={''}>
                        <FaWindowClose size={30} />
                    </Link>
                    <FaExclamation onClick={onClickDelete} size={30} style={{ display: 'none' }} cursor="pointer" className="deletarWarn" />
                </Botoes>
            </Content>
        </Container>
    );
};

export default CardAcconts;
