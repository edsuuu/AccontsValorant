import styled from 'styled-components';

export const Container = styled.div`
    .card {
        width: 100%;
        /* width: 300px; */
        height: 485px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid;
        border-radius: 10px;
        /* --main-color: #000;
        --submain-color: #78858f;
        --bg-color: #fff; */
        font-family:
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            'Open Sans',
            'Helvetica Neue',
            sans-serif;
        overflow: hidden;
        position: relative;
    }

    .card-content {
        position: absolute;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5); /* Fundo semitransparente */
        color: white;
        width: 100%;
        padding: 10px;
    }

    .card__title {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 20px;
        font-weight: 600;
        font-size: 10px;
        color: var(--main-color);
    }

    .nickName {
        background-color: #ababab;
        padding: 8px;
        border-radius: 4px;
    }

    .info-acconts {
        display: flex;
        flex-direction: column;
        padding: 8px;
        border-radius: 4px;
        gap: 10px;
        h3 {
            padding: 6px;
            border-radius: 4px;
        }
        .input-dados {
            background-color: #ababab;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            border-radius: 6px;
            width: 200px;
            padding: 5px;
        }
    }

    .card__subtitle {
        margin-top: 10px;
        font-weight: 400;
        font-size: 15px;
        color: var(--submain-color);
    }

    .card__btn {
        margin-top: 15px;
        width: 76px;
        height: 31px;
        border: 2px solid var(--main-color);
        border-radius: 4px;
        font-weight: 700;
        font-size: 11px;
        color: var(--main-color);
        background: var(--bg-color);
        text-transform: uppercase;
        transition: all 0.3s;
    }

    .card__btn-solid {
        background: var(--main-color);
        color: var(--bg-color);
    }

    .card__btn:hover {
        background: var(--main-color);
        color: var(--bg-color);
    }

    .card__btn-solid:hover {
        background: var(--bg-color);
        color: var(--main-color);
    }
`;
export const Background = styled.div`
    width: 300px;
    margin: auto;
    img {
        background-position: left top;
        width: 300px;
        margin: auto;
    }
`;

export const LinksEdit = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    gap: 10px;
`;
