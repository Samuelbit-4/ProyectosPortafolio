console.log("HOLAA");

//ELEMENTOS A MODIFICAR
const dia = document.querySelector("#day");
const ciudad = document.querySelector("#city");
const tiempoActual = document.querySelector("#time");
const wind1 = document.querySelector("#wind1");
const wind2 = document.querySelector("#wind2");
const rain1 = document.querySelector("#rain1");
const rain2 = document.querySelector("#rain2");
const grados = document.querySelector("#grade");
const gradosMargen = document.querySelector("#marginGrade");
const imgClima = document.querySelector("#imgClima");
const header = document.querySelector("header")
const main = document.querySelector("main");
const body = document.querySelector("body");



//LLAVES DE API
const key = "b6830ef86898875ed0afef8120b7d9b8";
const url = "https://api.openweathermap.org/data/2.5/weather?";

let ubication;
const inicio = document.createElement("div")
const funcionInit = () => {
    // main.style.filter = "blur(15px)"   
    // header.style.filter = "blur(15px)" 
    // inicio.classList = "border border-primary rounded-4 bg-white p-5 position-absolute z-3 top-50 start-50 translate-middle d-flex flex-column align-items-center justify-content-center"
    // inicio.innerHTML = `
    //     <img src="./assets/VAyR.gif" alt="progress">
    //     <h1 class="display-2">Cargando</h1>
    // `
    // body.appendChild(inicio)
  if (!"geolocation" in navigator) {
    return alert(
      "Tu navegador no soporta el acceso a la ubicación. Intenta con otro"
    );
  }

  const onUbicacionConcedida = (ubicacion) => {
    
    ubication = coords(ubicacion);
    coordenadas(ubication.latitude, ubication.longitude);
  };

  const onErrorDeUbicacion = (err) => {
    console.log("Error obteniendo ubicación: ", err);
  };

  const opcionesDeSolicitud = {
    enableHighAccuracy: true, // Alta precisión
    maximumAge: 0, // No queremos caché
    timeout: 5000, // Esperar solo 5 segundos
  };
  // Solicitar
  navigator.geolocation.getCurrentPosition(
    onUbicacionConcedida,
    onErrorDeUbicacion,
    opcionesDeSolicitud
  );
};
funcionInit();
function coordenadas(latitude, longitude) {
  fetch(`${url}lat=${latitude}&lon=${longitude}&appid=${key}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404" ||	data.cod === "400") {
        showError("Upss... parece que hubo un error\nintenta más tarde");
      } 
      else {
        if(showWeather(data)){
            // main.removeAttribute("style");
            // header.style.removeProperty("filter")
            // inicio.remove();
            showWeather(data); 
        } else{
            showError("Upss... parece que hubo un error\nintenta más tarde");
        }
        
      }
    });
}
function showError(message) {
  console.log(message);
  const divMensaje = document.createElement("div");
  const mensajeDiv = document.createElement("h2");
  mensajeDiv.textContent = message;
  divMensaje.classList =
    "position-absolute top-50 start-50 translate-middle w-50 h-25 z-3 alert alert-danger text-center d-flex align-items-center";
  divMensaje.setAttribute("role", "alert");
  mensajeDiv.classList = "display-6";
  divMensaje.appendChild(mensajeDiv);
  body.appendChild(divMensaje);
  setTimeout(() => {
    mensajeDiv.remove();
    divMensaje.remove();
  }, 5000);
}
function coords(ubicacion) {
  const {
    coords: { latitude, longitude },
  } = ubicacion;
  const objCoords = { latitude, longitude };
  return objCoords;
}

function showWeather(data) {
  if(data != null || data != undefined){
    const {
        name,
        main: { temp, temp_min, temp_max, humidity },
        weather: [arr],
        wind: {deg, speed}
      } = data;
      const tiempoTranscurrido = Date.now();
      const hoy = new Date(tiempoTranscurrido);
      const time = new Date();
      const tempActual = kelvinToCentigrades(temp);
      const tempMin = kelvinToCentigrades(temp_min);
      const tempMax = kelvinToCentigrades(temp_max);
      ciudad.textContent = `${name}`;
      dia.textContent = hoy.toDateString();
      tiempoActual.textContent = `${time.getHours()}:${time.getMinutes()}`;
      wind1.textContent = deg;
      wind2.textContent = speed;
      rain1.textContent = `${humidity}%`
      rain2.textContent = `${humidity}%`
      grados.textContent = `${tempActual} °C`
      gradosMargen.textContent = `${tempMin} °C - ${tempMax} °C`
      imgClima.removeAttribute("src");
      imgClima.setAttribute("src", `http://openweathermap.org/img/wn/${arr.icon}@2x.png`);
      imgClima.setAttribute("width", "100%");
      return true;
  } else{
    return false;
  }
  
}

function kelvinToCentigrades(kelvin) {
  return parseInt(kelvin - 273.15);
}
