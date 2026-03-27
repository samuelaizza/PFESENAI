const estudantes = [
    {nome: 'Isabely', idade:18, ra: 6969},
    {nome: 'Samuel', idade:17, ra: 6767},
    {nome: 'Tobias', idade:1, ra: 8888}
];

export default function ListaMap({titulo}){
    const listaEstudantes = estudantes.map((estudante) => {
        return <li key={estudante.id}>
            <h3>{estudante.nome}</h3>
            <p>{estudante.idade}</p>
            <p>ra: {estudante.ra}</p>
        </li>
})
    return(
        <>
        <h1>{titulo}</h1>
        <ul>
            {listaEstudantes}
        </ul>
        </>
    )
}