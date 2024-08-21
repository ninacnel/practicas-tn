const AvailableBeers = ({beers}) => {
    // Filtrar las cervezas que están disponibles
    const availableBeers = beers.filter(beer => beer.available);

    return (
        <div>
            <h1>Cervezas Disponibles</h1>
            <ul>
                {availableBeers.map(beer => (
                    <li key={beer.id}>
                        <strong>{beer.beerName}</strong> ({beer.beerStyle})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AvailableBeers;