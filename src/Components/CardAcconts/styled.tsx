import styled from 'styled-components';

export const Container = styled.div`
    border: 2px solid blue;
    height: 254px;
    background: rgb(188, 188, 188);
    box-shadow: 7px 5px 10px rgba(0, 0, 0, 0.333);
    padding: 20px;
`;
export const Content = styled.div`
    border: 2px solid green;
    display: flex;
    flex-direction: row;
    gap: 30px;
`;
export const DadosContas = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
export const UserIcon = styled.div`
    background-color: #565656;
    transform: translateX(10px) translateY(10px);
    width: 50px;
    height: 50px;
    border-radius: 10px;
`;
export const NomeDoDono = styled.div``;
export const Login = styled.div``;
export const Senha = styled.div``;
export const Botoes = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    a {
        color: #000;
    }
    .perfil {
        transition: 0.3s;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
    .editar {
        transition: 0.3s;
        &:hover {
            color: #00d1d8;
        }
    }

    .deletar {
        transition: 0.3s;
        &:hover {
            color: red;
        }
    }
    .deletarWarn {
        transition: 0.3s;
        &:hover {
            color: #ffc400;
        }
    }
`;
