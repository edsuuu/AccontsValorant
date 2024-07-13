import React from 'react';
import { RootState } from '../../store/modules/rootReducer';
import { useSelector } from 'react-redux';
import { Container, Informacoes } from './styled';

const Profile: React.FC = () => {
    const user = useSelector((state: RootState) => state.auth.user);

    console.log(user);

    return (
        <Container>
            <h1>Seu perfil</h1>
            <Informacoes>
                <label htmlFor="name">
                    <input type="text" name="name" id="name" value={user.nome} />
                </label>
                <label htmlFor="email">
                    <input type="text" name="email" id="email" value={user.email} />
                </label>
                <label htmlFor="login">
                    <input type="text" name="login" id="login" value={user.login} />
                </label>
            </Informacoes>

            <h1>
                Editar perfil <a href="/perfil-edit">editar</a>
            </h1>
        </Container>
    );
};

export default Profile;
