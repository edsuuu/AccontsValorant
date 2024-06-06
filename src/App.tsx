import { BrowserRouter as Router } from 'react-router-dom';
import './styles/globalStyle.css';

import AppRoutes from './Router';
import Navigation from './Components/Header/index.tsx';

export default function App(): JSX.Element {
    return (
        <div className='Container'>
            <Router>
                <Navigation />
                <AppRoutes />
            </Router>
        </div>
    );
}
