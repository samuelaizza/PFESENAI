const estudantes = [
    {nome: 'Isabely', idade:18, ra: 6969, disciplina: 'História'},
    {nome: 'Samuel', idade:17, ra: 6767, disciplina: 'Educação Física'},
    {nome: 'Tobias', idade:1, ra: 8888, disciplina: 'Matemática'}
];

export default function ListaFilter({titulo}){
    const lista = estudantes.filter(estudante => estudante.disciplina == 'Educação Física')
    const listaEstudantes = lista.map((estudante) => {
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