import { Link } from 'react-router-dom';
import './style.css';

export default function Header() {
    return (
        <div className='NavBar'>
            <Link to="/">Home</Link>
            <Link to="pagina2">pagina2</Link>
        </div>
    );
}
