import React, { useState } from 'react';
import { Background, CardTittle, Container } from './styled';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FaClipboard, FaClipboardCheck, FaEdit, FaExclamation, FaWindowClose } from 'react-icons/fa';
interface CardComponentProps {
    _id: string;
    nickName: string;
    login: string;
    senha: string;
    onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    onClickDelete: (e: React.MouseEvent<SVGElement, MouseEvent>) => void;
}

interface ClipBoardFunc {
    (text: string, nameItem: string, setCopied: React.Dispatch<React.SetStateAction<boolean>>): void;
}

const copyToClipboard: ClipBoardFunc = (text, nameItem, setCopied) => {
    navigator.clipboard.writeText(text);
    toast.success(`${nameItem} foi Copiado para a área de transferência`, { theme: 'dark' });
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
};

const CardComponent: React.FC<CardComponentProps> = ({ nickName, login, senha, _id, onClick, onClickDelete }) => {
    const [copiedLogin, setCopiedLogin] = useState<boolean>(false);
    const [copiedSenha, setCopiedSenha] = useState<boolean>(false);

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
                    <button onClick={() => copyToClipboard(login, 'Login', setCopiedLogin)}>
                        {copiedLogin ? <FaClipboardCheck size={22} /> : <FaClipboard size={22} />}
                    </button>
                </div>
                <div className="input-dados">
                    <p>{senha}</p>
                    <button onClick={() => copyToClipboard(senha, 'Senha', setCopiedSenha)}>
                        {copiedSenha ? <FaClipboardCheck size={22} /> : <FaClipboard size={22} />}
                    </button>
                </div>
            </CardTittle>
        </Container>
    );
};

export default CardComponent;
