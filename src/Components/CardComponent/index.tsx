import React from 'react';
import { Background, Container, LinksEdit } from './styled';
import img from '../../assets/img/background2.jpg';
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
            <div className="card">
                <Background>
                    <LinksEdit>
                        <div className="button-edit">
                            <Link className="editar" to={`/conta/edit/${_id}`}>
                                <FaEdit size={30} />
                            </Link>
                        </div>
                        <div className="button-delet">
                            <Link className="deletar" onClick={onClick} to={''}>
                                <FaWindowClose size={30} />
                            </Link>
                            <FaExclamation onClick={onClickDelete} size={30} style={{ display: 'none' }} cursor="pointer" className="deletarWarn" />
                        </div>
                    </LinksEdit>
                    <img src={img} alt="Profile" className="profile-image" />
                </Background>
                <div className="card__title">
                    <div className="nickName">
                        <h2>{nickName}</h2>
                    </div>
                    <div className="info-acconts">
                        <div className="input-dados">
                            <h3>{login}</h3>
                            <button onClick={() => copyToClipboard(login, 'Login')}>Copiar</button>
                        </div>
                        <div className="input-dados">
                            <h3>{senha}</h3>
                            <button onClick={() => copyToClipboard(senha, 'Senha')}>Copiar</button>
                        </div>
                    </div>

                    {/* <h2>Nick:</h2>
                    <h3>Inocente Zero ツ #Boss</h3> */}
                </div>

                {/* <button className="card__btn">Button</button>
                    <button className="card__btn card__btn-solid">Button</button> */}
            </div>
        </Container>
    );
};

export default CardComponent;
