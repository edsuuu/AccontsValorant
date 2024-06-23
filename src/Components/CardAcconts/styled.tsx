import styled from 'styled-components';

export const Container = styled.html`

.card {
    width: 190px;
    height: 254px;
    background: rgb(38, 38, 38);
    box-shadow: 7px 5px 10px rgba(0, 0, 0, 0.333);
    border-radius: 10px;
    padding: 16px;
    margin: 16px;
  }

  .imge {
    height: 70px;
    background-color: #ff5858;
    border-radius: 10px 10px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .imge .Usericon {
    background-color: #414141;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    transform: translate(10px, 10px);
  }

  .imge .UserName,
  .imge .Id {
    background-color: #414141;
    width: 60px;
    height: 15px;
    border-radius: 5px;
    border: 1px solid #262626;
    color: #262626;
    font-size: 12px;
    font-weight: bold;
    position: absolute;
  }

  .imge .UserName {
    transform: translate(70px, -35px);
  }

  .imge .Id {
    transform: translate(70px, -25px);
  }

  .Description {
    width: 180px;
    height: 130px;
    background-color: #414141;
    border-radius: 0 0 10px 10px;
    transform: translate(5px, 6px);
    padding: 10px;
    color: #fff;
    font-size: 14px;
  }

  .social-media {
    margin-top: 10px;
  }

  .social-media:before {
    content: " ";
    display: block;
    width: 100%;
    height: 2px;
    background: #414141;
    margin-bottom: 10px;
  }

  .social-media a {
    margin-right: 15px;
    text-decoration: none;
    color: inherit;
  }

  .social-media a:last-child {
    margin-right: 0;
  }

  .social-media a svg {
    width: 20px;
    fill: #ff5858;
    vertical-align: middle;
    margin-right: 5px;
  }
  `
