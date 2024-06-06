import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Pagina2 from '../Pages/Pagina2';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pagina2" element={<Pagina2 />} />
        </Routes>
    );
}
