import styled from "styled-components";

export const Title = styled.h1`
     margin-bottom: 5px;
`;

export const Container = styled.div`
     margin-top: 100px;
     display: flex;
     justify-content: center;
     flex-direction: column;
     align-items: center;
     width: 100%;
     padding: 20px;
`;

export const Form = styled.form`
     background-color: #afafaf;
     width: 600px;
     height: auto;
     display: flex;
     flex-direction: column;
     align-items: center;
     border-radius: 10px;
     gap: 15px;
     padding: 20px;
     box-shadow: 4px 7px 13px #000000ac;

     label {
          margin-top: 10px;
          padding: 5px;
          color: #000000;
          font-size: 1.1rem;
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
          padding: 8px 15px;
          border-radius: 15px;
          font-size: 1.1rem;
          border: 0.5px solid #000000bd;
          &:focus {
               border: 1px solid #00ffb3;
               outline: none;
          }
     }
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

export const ProfilePicture = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     text-align: center;
     padding: 10px;

     img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
     }
     a {
          padding: 10px;
          text-decoration: none;
          color: #000000;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;
          font-weight: bold;
     }
     a:hover {
          text-decoration: underline;
     }
`;
