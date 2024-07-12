import React from 'react';
import { Background, CardTittle, Container } from './styled';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FaEdit, FaExclamation, FaWindowClose } from 'react-icons/fa';
// import styled from 'styled-components';

interface CardComponentProps {
    _id: string;
    nickName: string;
    login: string;
    senha: string;
    onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    onClickDelete: (e: React.MouseEvent<SVGElement, MouseEvent>) => void;
}

const copyToClipboard = (text: string, nameItem: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${nameItem} foi Copiado para a área de transferência`);
};

const CardComponent: React.FC<CardComponentProps> = ({ nickName, login, senha, _id, onClick, onClickDelete }) => {
    return (
        <Container>
            <Background>
                <Link className="editar" to={`/conta/edit/${_id}`}>
                    <FaEdit size={30} />
                    Editar
                </Link>

                <Link className="deletar" onClick={onClick} to={''}>
                    <FaWindowClose size={30} />
                    Deletar
                </Link>
                <FaExclamation onClick={onClickDelete} size={30} style={{ display: 'none' }} cursor="pointer" className="deletarWarn" />

                {/* <div> imagem</div> */}
            </Background>

            <CardTittle>
                <div className="nickName">
                    <p>{nickName}</p>
                </div>

                <div className="input-dados">
                    <p>{login}</p>
                    <button onClick={() => copyToClipboard(login, 'Login')}>Copiar</button>
                </div>
                <div className="input-dados">
                    <p>{senha}</p>
                    <button onClick={() => copyToClipboard(senha, 'Senha')}>Copiar</button>
                </div>
            </CardTittle>
        </Container>
    );
};

export default CardComponent;
