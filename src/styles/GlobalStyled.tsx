import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import ValorantFont from './ValorantFont.ttf';

export const GlobalStyled = createGlobalStyle`


@font-face {
    font-family: 'ValorantFont';
    src: url(${ValorantFont}) format('truetype');

  }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}


body {
    background-color: rgb(26, 36, 46);
    font-family: "Poppins", sans-serif;



.Toastify {
    font-family: 'Roboto', sans-serif;

    .toast-container {
        width: auto;
        margin-top: 4%;

    }
}
}

`;
