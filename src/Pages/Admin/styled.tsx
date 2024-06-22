import styled from 'styled-components';

export const Container = styled.div`
    margin: 2rem auto;
    max-width: 1440px;
    border: 1px solid black;
    text-align: center;

    h1 {
        margin-bottom: 20px;
        font-size: 24px;
    }

    p {
        margin-bottom: 20px;
        font-size: 18px;
    }

    div {
        margin: 15px;

        a {
            display: block;
            padding: 10px 15px;
            background-color: #007bff;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s;

            &:hover {
                background-color: #0056b3;
            }
        }
    }
`;
