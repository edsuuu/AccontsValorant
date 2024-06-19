import styled from "styled-components";

export const Nav = styled.nav`
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 10px;
     background-color: #5365a1;
     /* border-bottom: 4px solid black; */
     box-shadow: 0px 2px 4px rgb(15, 4, 4);
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;

     a {
          color: white;
          text-decoration: none;
          font-weight: bold;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 10px;
          transition: 0.3s;
          font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
               "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
     }
     a:hover {
          color: #00ffb3;
     }
`;

export const Lista = styled.ul`
     margin: 0px 150px 0px 0px;
     display: flex;
     align-items: center;
     justify-content: space-between;
     font-size: 0.9rem;
     display: flex;
     justify-content: center;
     gap: 30px;
     padding: 20px;
     list-style: none;
`;

export const Icon = styled.span``;

export const Sair = styled.div`
     a {
          padding: 2px;
          margin-right: 30px;
     }
`;

export const Title = styled.div`
     color: white;
     display: flex;
     flex-wrap: wrap;
     padding: 2px;
     margin-left: 30px;
     font-size: 0.85rem;
     font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
     display: block;
     h1 {
          width: 300px;
     }
`;
