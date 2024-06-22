import React from 'react';
import { Link } from 'react-router-dom';

const EditUser: React.FC = () => {
    return (
        <div>
            <h1>edit user </h1>
            <h1>
                Reultilizar o componente do <Link to="/perfil-edit">EditAndDeleteProfile</Link>
                pois para editar o usuario precisa disparar uma action no saga
            </h1>
        </div>
    );
};
export default EditUser;
