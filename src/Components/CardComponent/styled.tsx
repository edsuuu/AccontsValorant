import styled from 'styled-components';

export const Container = styled.div`
    .card {
        width: 300px;
        height: 384px;
        /* background: url('../../assets/img/Img-card1.webp'); */
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 5px solid black;
        border-radius: 20px;
        --main-color: #000;
        --submain-color: #78858f;
        --bg-color: #fff;
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
        background-image: url('../../assets/img/Img-card1.webp');
        background-size: cover;
        background-position: center;
    }

    .card-content {
        background-image: url('../../assets/img/Img-card1.webp');
        position: absolute;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5); /* Fundo semitransparente */
        color: white;
        width: 100%;
        padding: 10px;
    }

    .card__title {
        margin-top: 60px;
        font-weight: 500;
        font-size: 18px;
        color: var(--main-color);
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
