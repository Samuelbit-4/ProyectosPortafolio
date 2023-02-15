const apiKey = '1707a8364a48071b49314bb1192f33ad';

import { dias, documento, kelvinToCentigrades} from './main.js'


export function daily(latitude, longitude) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => showDiario(data))
}

function showDiario(data) {
    
    console.log(data)
    const { list: [...a] } = data;
    
    let contador = 0;
    console.log(a);
    while (contador <= a.length) {
        let diaAr = new Date(a[contador].dt_txt);
        const divDia = document.createElement("div");
        const temp = a[contador];
        divDia.classList = "container d-flex p-2 m-2 w-25 flex-column justify-content-center align-items-center border-3 dia-card border rounded-3";
        divDia.innerHTML = `
            <div class="row border rounded-5 p-3 text-center d-flex align-items-center justify-content-center bg-primary"><h2 class="fs-6 text-white fw-bold">${diaAr.toUTCString().split(' 06:00:00 GMT')}</h2></div>
            <img src="./assets/tipos/nublado.png" class="w-75 row">
            <div class="row">
                <h1 class="col">${kelvinToCentigrades(a[contador].main.temp)} °C<h1>
            <div>
        `
        dias.appendChild(divDia);
        contador += 8;
    }
    
}
