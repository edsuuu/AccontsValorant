import styled from 'styled-components';

export const Container = styled.div`
    z-index: 1;
    max-width: 1440px;
    min-width: 320px;
    height: 92vh;
    margin: 0px auto 0px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ece8e3;
    font-family: 'ValorantFont', sans-serif;

    .image {
        img {
            max-width: 650px;
            width: 100%;
        }
    }
`;
