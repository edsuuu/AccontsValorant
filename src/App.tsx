import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Router';
import Navigation from './Components/Navigation';

import { PersistGate } from 'redux-persist/integration/react'; // Caminho corrigido

import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import { GlobalStyled } from './styles/GlobalStyled';
import React from 'react';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router>
                    <Navigation />
                    <AppRoutes />
                    <ToastContainer autoClose={3000} className="toast-container" />
                    <GlobalStyled />
                </Router>
            </PersistGate>
        </Provider>
    );
};

export default App;
