document.addEventListener("DOMContentLoaded", e =>{
    const btnRegistrar = document.querySelector("#btnRegistrar")
    const opcionesRegistrar = document.querySelector("#cajaOpciones")

    //EVENTO PARA ACTIVAR CUADROS DE REGISTRO
    btnRegistrar.addEventListener("mouseover", e=>{
        opcionesRegistrar.removeAttribute("hidden")
    })
    opcionesRegistrar.addEventListener("mouseout", e=>{
        opcionesRegistrar.setAttribute("hidden","")
    })

})