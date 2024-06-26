import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyled = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body {
background-color: #5a5a5a;

.Toastify {
    font-family: 'Roboto', sans-serif;

    .toast-container {
        width: auto;
        margin-top: 4%;

    }
}
}

`;
