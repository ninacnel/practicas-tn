const Beers = ({beers}) => {
    // Suponiendo un tipo de cambio de USD a Pesos Argentinos
    const exchangeRate = 350; // Ejemplo de tipo de cambio

    // Convertir los precios de USD a Pesos Argentinos
    const beersInARS = beers.map(beer => ({
        ...beer,
        priceInARS: beer.price * exchangeRate
    }));

    return (
        <div>
            <h1>Lista de Cervezas</h1>
            <ul>
                {beersInARS.map(beer => (
                    <li key={beer.id}>
                        <strong>{beer.beerName}</strong> ({beer.beerStyle}) - 
                        Precio: ${beer.priceInARS} ARS - 
                        {beer.available ? "Disponible" : "No Disponible"}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Beers;