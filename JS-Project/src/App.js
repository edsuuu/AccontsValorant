import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routers';
import Navigation from './Components/Navigation';
import GlobalStyle from './styles/GlobalStyle'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux';
import store, { persistor } from './store';


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router >
          <Navigation />
          <AppRoutes />
          <ToastContainer autoClose={3000} className="toast-container"/>
          <GlobalStyle />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
