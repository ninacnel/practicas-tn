const BeersCount = ({ beers }) => {
    // Filtrar y contar cervezas de estilo Red e IPA
    const redBeersCount = beers.filter(beer => beer.beerStyle === "Red").length;
    const ipaBeersCount = beers.filter(beer => beer.beerStyle === "IPA").length;

    return (
        <div>
            <h1>Conteo de Cervezas por Estilo</h1>
            <p>Cervezas estilo Red: {redBeersCount}</p>
            <p>Cervezas estilo IPA: {ipaBeersCount}</p>
        </div>
    );
}

export default BeersCount;