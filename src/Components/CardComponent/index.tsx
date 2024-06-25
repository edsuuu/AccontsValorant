import React from 'react';
import { Container } from './styled';
// import ImgCard from '../../assets/img/Img-card1.webp';

const CardComponent: React.FC = () => {
    return (
        <Container>
            <div className="card">
                <div className="card-content"></div>
                <div className="card__title">Inocente Zero ツ#Boss</div>
                <div className="card__subtitle">Web Development</div>
                <div className="card__wrapper">
                    <button className="card__btn">Button</button>
                    <button className="card__btn card__btn-solid">Button</button>
                </div>
            </div>
        </Container>
    );
};

export default CardComponent;
