import {useState} from 'react'
import {Link} from 'react-router-dom'
// import "./login.css";

import imagemEstacao from '../assets/estacao.png'

export default function Registro() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    return (
        <section className="container">
            <div className="card">
                <img src={imagemEstacao} alt="Estação Meteorológica"/>
                <div className="formulario">
                    <form action="">
                    <h2>Cadastre-se</h2>
                    <label htmlFor="usuario">Usuário</label>
                    <input type="text" id="confSenha" placeholder="Digite seu usuário" 
                    className="input" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" placeholder="Digite sua senha"
                    className="input" value={senha} onChange={(e) => setSenha(e.target.value)} />
                    <label htmlFor="confSenha">Confirma Senha</label>
                    <input type="password" id="confSenha" placeholder="Confirme sua senha"
                    className="input" value={confirmaSenha} onChange={(e) => setConfirmaSenha(e.target.value)} />
                    <Link to='/dashboard' className="botao">Registrar</Link>
                    </form>
                    <Link to='/login'>Já tem conta? Faça login</Link>
                </div>
            </div>
        </section>
    )
}