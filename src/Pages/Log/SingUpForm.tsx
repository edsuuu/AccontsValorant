import React, { useState, ChangeEvent, FormEvent } from 'react';
import './SignUpForm.css';

const SignUpForm: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (event: ChangeEvent<HTMLInputElement>) => {
        setter(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Enviando:', { name, email, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" value={name} onChange={handleInputChange(setName)} required />
            </div>
            <div>
                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" value={email} onChange={handleInputChange(setEmail)} required />
            </div>
            <div>
                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" value={password} onChange={handleInputChange(setPassword)} required />
            </div>
            <button type="submit">Criar Conta</button>
        </form>
    );
};

export default SignUpForm;
