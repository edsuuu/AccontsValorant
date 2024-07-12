import styled from 'styled-components';

export const Container = styled.div`
    background-color: #ece8e3;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem auto 10px auto;
    border-radius: 10px;
`;
export const Title = styled.div`
    margin: 20px 0px 0px 0px;
    padding-bottom: 15px;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #0000003e;
    color: rgb(26, 36, 46);
    font-family: 'ValorantFont', sans-serif;

    a {
        color: rgb(26, 36, 46);
        font-size: 1.3rem;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 5px;
    }
    a:hover {
        text-decoration: underline;
    }
`;

export const ContaContainer = styled.div`
    margin-top: 20px;
    font-size: 20px;
    gap: 30px;
    width: 100%;
    div {
        margin: 10px 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        & span {
            margin-left: 20px;
        }
    }
`;

export const Profile = styled.div`
    padding: 10px;
    transition: 0.3s;
    border-radius: 10px;
    box-shadow: 1px 1px 20px #00000032;

    &:hover {
        background-color: #71afc240;
    }
    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
`;

export const Botoes = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    a {
        color: #ffffff;
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
            color: #ffffff;
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

export const CardAccoutsContainer = styled.div`
    width: 100%;
    padding: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
`;
