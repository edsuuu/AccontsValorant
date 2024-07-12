import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;

    a {
        font-size: 1.6rem;
    }
`;

export const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    gap: 20px;
    h1:nth-child(1) {
        font-weight: bold;
        font-size: 2.5rem;
    }
    h1:nth-child(2) {
        font-size: 1.7rem;

        font-family: 'ValorantFont', sans-serif;
    }
    a {
        font-family: 'ValorantFont', sans-serif;

        color: white;
        &:hover {
            color: #ff4655;
        }
    }
`;
