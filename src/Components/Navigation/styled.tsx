import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(26, 36, 46);
    border-bottom: 1px solid #ffffff85;
    font-family: 'ValorantFont', sans-serif;

    ul {
        list-style-type: none;
        overflow: hidden;
    }

    ul li {
        float: left;
    }

    ul li a {
        background-color: rgb(26, 36, 46);
        display: block;
        color: aliceblue;
        text-align: center;
        padding: 16px 16px;
        text-decoration: none;
        min-width: 160px;
    }

    ul li a:hover {
        background-color: #11111a;
        border: none;
    }

    /* Dropdown menu */
    ul li ul {
        display: none;
        position: absolute;
        min-width: 160px;
        z-index: 1;
    }

    ul li:hover ul {
        display: block;
        border: 1px solid #fff;
    }

    ul li ul li {
        float: none;
    }

    ul li ul li a:hover {
        background-color: #11111a;
    }
`;

export const Lista = styled.ul``;

export const Title = styled.div`
    color: white;
    display: flex;
    flex-wrap: wrap;
    padding: 2px;
    margin: 0px 25px 0px 25px;
    font-size: 0.85rem;
    /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
    font-family: 'ValorantFont', sans-serif;

    a {
        text-decoration: none;
        color: white;
        &:hover {
            color: #00ffb3;
        }
    }
`;
