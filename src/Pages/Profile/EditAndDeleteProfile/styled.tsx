import styled from "styled-components";

export const Container = styled.div`
     margin-top: 120px;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
`;
export const Button = styled.button`
     width: 300px;
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
     height: auto;
     display: flex;
     flex-direction: column;
     align-items: center;

     gap: 15px;
     small {
          text-align: center;
          font-size: 0.9rem;
     }
     label {
          margin-top: 10px;
          padding: 5px;
          font-size: 1.2rem;
          font-family: "Roboto", sans-serif;
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
               border: 1px solid #001aff;
               outline: none;
          }
     }
`;
export const Conteudo = styled.div`
     background-color: #bdbdbd;
     box-shadow: 4px 7px 15px #000000ac;
     border: 0.1px solid #00000029;
     border-radius: 10px;
     padding: 20px;
     h1 {
          font-size: 2rem;
          font-weight: bold;
          text-align: center;
     }
`;
export const Title = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     margin: 20px;

     a {
          font-size: 1.2rem;
          font-weight: bold;
          color: #4400ff;
          text-decoration: none;
          transition: 0.3s;
     }
     a:hover {
          text-decoration: underline;
     }
`;

export const Alerta = styled.div`
     position: absolute;
     width: 100%;
     height: 100%;
     z-index: 1;
     top: 0;
     left: 0;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     font-size: 3rem;
     color: #fff;
     font-weight: bold;
     background-color: #050505be;

     div {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: row;
          gap: 10px;
          .cancelar {
               transition: 0.3s;
               &:hover {
                    background-color: #7bd47f;
               }
          }
          .excluir {
               transition: 0.3s;
               &:hover {
                    background-color: #d47b7b;
               }
          }

          button {
               padding: 10px;
               border-radius: 15px;
               font-size: 1.2rem;
               border: 0.5px solid #000000bd;
               cursor: pointer;
          }
     }
`;
