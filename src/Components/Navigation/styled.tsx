import styled from 'styled-components';

export const Nav = styled.nav`
    /* display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #5365a1;
    box-shadow: 0px 2px 4px rgb(15, 4, 4);

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
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    a:hover {
        color: #00ffb3;
    } */

    display: flex;
    border: 1px solid black;
    justify-content: center;
    gap: 30px;
    align-items: center;

    /* Basic styling for navigation */
    ul {
        list-style-type: none;
        background-color: #9e9e9e;
        overflow: hidden;
    }

    ul li {
        float: left;
    }

    ul li a {
        display: block;
        color: #212121;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        min-width: 160px;
    }

    ul li a:hover {
        background-color: #ddd;
    }

    /* Dropdown menu */
    ul li ul {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        z-index: 1;
    }

    ul li:hover ul {
        display: block;
    }

    ul li ul li {
        float: none;
    }

    ul li ul li a {
        padding: 12px 16px;
    }

    ul li ul li a:hover {
        background-color: #ddd;
    }
`;

export const Lista = styled.ul`
    /* display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.9rem;
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 20px;
    list-style: none; */
`;

export const Title = styled.div`
    color: white;
    display: flex;
    flex-wrap: wrap;
    padding: 2px;
    margin-left: 30px;
    font-size: 0.85rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

    a {
        text-decoration: none;
        color: white;
        &:hover {
            color: #00ffb3;
        }
    }
`;
