export default function ListaFrutas() {

    const frutas = ["Maçã", "Banana", "Pêra", "Abacaxi", "Manga"];


    const listaRenderizada = frutas.map((fruta) => {
        return (
            <li key={fruta}>
                <h3>{fruta}</h3>
            </li>
        );
    });


    return (
        <>
            <h1>Lista de Frutas</h1>
            <ul>
                {listaRenderizada}
            </ul>
        </>
    );
}