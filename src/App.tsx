import { BrowserRouter as Router } from 'react-router-dom';
import './styles/globalStyle.css';
import React from 'react';
import SignUpForm from './Pages/Log/SingUpForm.tsx';

import Navigation from './Pages/Log/SingUpForm.tsx';
import AppRoutes from './Router';

export default function App(): JSX.Element {
    return (
        <div className="Container">
            <Router>
                <h1>Criar Conta</h1>
                <SignUpForm />
            </Router>
        </div>
    );
}
