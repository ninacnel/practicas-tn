const BeersStyles = ({ beers }) => {
    // Crear un conjunto de estilos únicos usando Set
    const beerStyles = [...new Set(beers.map(beer => beer.beerStyle))];

    return (
        <div>
            <h1>Estilos de Cerveza Disponibles</h1>
            <ul>
                {beerStyles.map((style, index) => (
                    <li key={index}>{style}</li>
                ))}
            </ul>
        </div>
    );
}

export default BeersStyles;