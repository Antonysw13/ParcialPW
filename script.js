const obtenerValorInput = () => {
    let inputTexto = document.getElementById("input_poke");
    let valor = inputTexto.value
    peticionApi(valor)
}

const peticionApi = (pokemon) => {
    const baseUrl = 'https://pokeapi.co/api/v2/';
    const enpoint = `pokemon/${pokemon}`;
    const url = `${baseUrl}${enpoint}`;

    axios.get(url)
        .then(res => printData(res.data)) 
        .catch(err => console.log(err));
}

const printData = (data) =>{
    let respuesta = document.getElementById("show-info")
    respuesta.innerHTML = `
        <span>Name: ${data.name}</span><br>
        <span>Height: ${data.height}</span><br>
        <span>Weight: ${data.weight}</span><br>
        <img src="${data.sprites.front_default}" alt="Pokemon Image">
    `;
}