import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;

    .div_Log {
    }
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 3rem;
`;

export const Button = styled.button`
    width: 50%;
    padding: 20px;
    font-size: 1.1rem;
    font-weight: bold;
    border-radius: 20px;
    border: 0.5px solid #0000008d;
    background-color: #ffffff;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
        background-color: #0400ff42;
        color: #ececec;
    }
`;

export const Form = styled.form`
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    gap: 40px;
    padding: 30px;
    label {
        margin-top: 10px;
        padding: 5px;
        color: #000000;
        font-size: 1.2rem;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 70%;
        & .error {
            border: 1px solid #ff00008d;
        }
    }
    input {
        padding: 10px 15px;
        border-radius: 15px;
        font-size: 1.2rem;
        border: 0.5px solid #000000bd;
        &:focus {
            border: 1px solid #4400ff;
            outline: none;
        }
    }
`;

export const Conteudo = styled.div`
    border-radius: 15px;
    background-color: #8080804b;
    box-shadow: 4px 7px 15px #000000ac;
`;
