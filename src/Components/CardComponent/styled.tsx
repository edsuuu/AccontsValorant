import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    padding: 15px 0;
    align-items: center;
    border-radius: 10px;
    background-color: rgb(15, 25, 35);
    border: 1px solid #ff46569e;
`;
export const Background = styled.div`
    width: 300px;
    margin: auto;

    padding: 2rem;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    a,
    .deletarWarn {
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: center;
        text-decoration: none;
        color: #ff4655;
        &:hover {
            text-decoration: underline;
        }
    }
`;

export const CardTittle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 1.1rem;
    text-align: center;
    width: 100%;
    padding: 10px;

    .nickName {
        background-color: #ece8e3;
        padding: 8px;
        border-radius: 4px;
        margin: 0 1rem;
    }

    .input-dados {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        border-radius: 6px;
        padding: 5px 10px;
        background-color: #ece8e3;
        margin: 0 1rem;
    }

    button {
        border-radius: 6px;
        padding: 5px;
        border: 1px solid black;
        font-weight: 800;
        background-color: #ff4655;
        cursor: pointer;
        &:active {
            background-color: #5600f7;
        }
    }
`;
