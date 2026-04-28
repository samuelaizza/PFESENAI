import { useState } from "react";
import Header from "../components/header.jsx";
import './cadastro.css';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ nome, endereco, email, celular });
    };

    return (
        <div>
            <Header />

            <div className="container">
                <div className="form-box">
                    <h3>Cadastro de dados pessoais</h3>

                    <form onSubmit={handleSubmit}>

                        <div className="form-group">
                            <label>Nome</label>
                            <input
                                type="text"
                                placeholder="Seu nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Endereço</label>
                            <input
                                type="text"
                                placeholder="Seu endereço"
                                value={endereco}
                                onChange={(e) => setEndereco(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Seu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Celular</label>
                            <input
                                type="text"
                                placeholder="00 00000-0000"
                                value={celular}
                                onChange={(e) => setCelular(e.target.value)}
                            />
                        </div>

                        <button type="submit">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}