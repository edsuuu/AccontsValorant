import React from 'react';
import styled from 'styled-components';

export const ContainerCardsValorant = styled.div`
    display: flex;
    margin: auto;
    margin-top: 4rem;
    width: 320px;
    flex-direction: row;
    justify-content: center;
    border: 1px solid white;

    .card {
        border-radius: 15px;
        border: 4px solid rgb(0, 170, 212);
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        div:nth-child(1) {
            border: 1px solid rgb(0, 212, 11);
            height: 300px;
            overflow: hidden;
            position: relative;
            img {
                width: 100%;
            }
        }

        div:nth-child(2) {
            border: 1px solid rgb(198, 212, 0);
        }
    }
`;

const CardContasComponent: React.FC = () => {
    return (
        <ContainerCardsValorant>
            <div className="card">
                <div>
                    <img
                        src="https://cdn.discordapp.com/attachments/972692800330149989/1255659395694723122/background.jpg?ex=667def70&is=667c9df0&hm=312a4603e947d29e230a1fb7509f5cedec0b43df1a6129d49f89487f582ef4f2&"
                        alt="img"
                    />
                </div>
                <div>
                    <p>login</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio repellat consectetur maiores perspiciatis mollitia voluptate dolorum,
                        voluptatem ratione culpa fugit cum magni! Esse a consectetur porro voluptate, error vero iusto.
                    </p>
                </div>
            </div>
        </ContainerCardsValorant>
    );
};
export default CardContasComponent;
