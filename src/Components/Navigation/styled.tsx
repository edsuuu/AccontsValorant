import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: #11111a;
    backdrop-filter: blur(30px);
    box-shadow: 0px 0px 30px rgba(227, 228, 237, 0.37);
    border: 2.5px solid rgba(255, 255, 255, 0.15);
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;

    ul {
        list-style-type: none;
        overflow: hidden;
    }

    ul li {
        float: left;
    }

    ul li a {
        display: block;
        color: aliceblue;
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
