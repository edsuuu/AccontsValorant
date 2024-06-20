import React, { useState, useRef, useEffect } from 'react';
import { Container, Title } from './styled';
import { useNavigate } from 'react-router-dom';

const Redirect: React.FC = () => {
    const [time, setTime] = useState<number>(3);
    const timeOut = useRef<NodeJS.Timeout | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (timeOut.current) {
            clearTimeout(timeOut.current);
        }

        timeOut.current = setTimeout(() => {
            setTime((t) => t - 1);
        }, 1000);

        if (time <= 0) {
            navigate('/login');
            window.location.reload();
        }

        return () => {
            if (timeOut.current) {
                clearTimeout(timeOut.current);
            }
        };
    }, [navigate, time]);

    return (
        <Container>
            <Title>
                Você não está logado! <br /> Será redirecionado em: {time}
            </Title>
        </Container>
    );
};

export default Redirect;
