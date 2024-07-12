import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import ValorantFont from './ValorantFont.ttf';

export const GlobalStyled = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

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
