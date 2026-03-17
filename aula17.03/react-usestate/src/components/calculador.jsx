import { useState } from "react";
import "./calculador.css";

export default function Calculador() {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [erro, setErro] = useState("");

    function validarNumeros(incluirN2 = true) {
        setErro("");
        
        if (Number(n1) <= 0) {  
            setErro("Número 1 deve ser maior que zero!");
            return false;
        }
        
        if (incluirN2 && Number(n2) <= 0) {
            setErro("Número 2 deve ser maior que zero!");
            return false;
        }
        
        return true;
    }

    function somar(e) {
        e.preventDefault();
        if (!validarNumeros()) return;
        setResultado(Number(n1) + Number(n2));
    }

    function subtrair(e) {
        e.preventDefault();
        if (!validarNumeros()) return;
        setResultado(Number(n1) - Number(n2));
    }

    function multiplicar(e) {
        e.preventDefault();
        if (!validarNumeros()) return;
        setResultado(Number(n1) * Number(n2));
    }

    function dividir(e) {
        e.preventDefault();
        if (!validarNumeros()) return;
        if (Number(n2) === 0) {
            setErro("Não é possível dividir por zero!");
            return;
        }
        setResultado(Number(n1) / Number(n2));
    }

    function raizQuadrada(e) {
        e.preventDefault();
        if (!validarNumeros(false)) return;
        setResultado(Math.sqrt(Number(n1)));
    }

    function potencializar(e) {
        e.preventDefault();
        if (!validarNumeros()) return;
        setResultado(Math.pow(Number(n1), Number(n2)));
    }

    function limpar(e) {
        e.preventDefault();
        setN1(0);
        setN2(0);
        setResultado(0);
        setErro("");
    }

    return (
        <>
            <h1>Calculadora</h1>
            <form>
                <label htmlFor="">Número 1</label>
                <input type="number" value={n1} onChange={(e) => setN1(e.target.value)} />
                <label htmlFor="">Número 2</label>
                <input type="number" value={n2} onChange={(e) => setN2(e.target.value)} />
                
                {erro && <p style={{ color: "red" }}>{erro}</p>}
                
                <div>
                    <button onClick={somar}>Somar</button>
                    <button onClick={subtrair}>Subtrair</button>
                    <button onClick={multiplicar}>Multiplicar</button>
                    <button onClick={dividir}>Dividir</button>
                    <button onClick={raizQuadrada}>√</button>
                    <button onClick={potencializar}>Potência</button>
                    <button onClick={limpar}>Limpar</button>
                </div>
                
                <span>Resultado: {resultado}</span>
            </form>
        </>
    );
}
