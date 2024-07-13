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
                <h1>{user.nome}</h1>

                <h1>{user.email}</h1>

                <h1>{user.login}</h1>
            </Informacoes>

            <h1>
                Editar perfil <a href="/perfil-edit">editar</a>
            </h1>
        </Container>
    );
};

export default Profile;
