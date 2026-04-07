import {Routes, Route} from 'react-router-dom';

//import das rotas
import Login from '../pages/Login';
// import Registro from '../pages/Registro';
// import Dashboard from '../pages/Dashboard';
// import Cadastro from '../pages/Cadastro';
// import Relatorio from '../pages/Relatorio';
// import NotFound from '../pages/NotFound';

export default function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    )
}