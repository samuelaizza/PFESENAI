import { useState } from 'react';

export default function Aluno({titulo}) {
    const [nome, setNome] = useState('Samuel')
    const [idade, setIdade] = useState(17)
    const [RA, setRA] = useState('490909');
    const [nota, setNota] = useState(7);
 
    return (
        <>
        <h1>{titulo}</h1>
        <p>{nome}</p>
        <p>{idade}</p>
        <p>{RA}</p>
        <p>{nota}</p>
        </>
    )
}