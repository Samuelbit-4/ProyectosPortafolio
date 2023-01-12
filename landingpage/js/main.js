document.addEventListener("DOMContentLoaded", e =>{

    const btnRegistrar = document.querySelector("#btnRegistrar")
    const opcionesRegistrar = document.querySelector("#cajaOpciones")
    const textCarrusel1 = document.querySelectorAll("#carrusel1 div")
    const btnSiguienteC1 = document.querySelector("#btnSiguiente")
    const btnRegresarC1 = document.querySelector("#btnRegresar")
    const radioC1 = document.querySelectorAll('#posicionR input')
    const carrusel1 = document.querySelector("#carrusel1")
    const btnSiguienteC2 = document.querySelector("#btnS2")
    const btnRegresarC2 = document.querySelector("#btnR2")
    const carrusel2 = document.querySelector("div#carrusel2")
    const carrusel2div = document.querySelector(".div-mayor")

    //EVENTO PARA ACTIVAR CUADROS DE REGISTRO
    btnRegistrar.addEventListener("mouseover", e=>{
        opcionesRegistrar.removeAttribute("hidden")
    })
    opcionesRegistrar.addEventListener("mouseout", e=>{
        opcionesRegistrar.setAttribute("hidden","")
    })


    //CARRUSEL UNO
    const arregloCarusel1 = [];
    let contadorCarrusel1 = 1;
    textCarrusel1.forEach(elem =>{
        elem.setAttribute("value", contadorCarrusel1)
        arregloCarusel1.push(elem)
        contadorCarrusel1++;
    })
    console.log(arregloCarusel1)
    console.log(radioC1)

    //EVENTOS PARA BOTONES CARRUSEL 1
    btnSiguienteC1.addEventListener("click", e => btnSiguiente(radioC1))
    btnRegresarC1.addEventListener("click", e => btnRegresar(radioC1))


    //FUNCIONES PARA RADIO BUTTONS
    function btnSiguiente(input){
        let valorA = 0;
        input.forEach(elem =>{ 
            if(elem.hasAttribute("checked")){                            
                elem.removeAttribute("checked")
                valorA = elem.getAttribute("value");
            }           
        })
        if(valorA == 4) valorA = 0;
        valorA++;
        input.forEach(elem =>{
            if(elem.getAttribute("value") ==  valorA){
                elem.setAttribute("checked", "")
                let valorDiv = valorA - 1;
                let contador = 0;
                arregloCarusel1.forEach(elem =>{                   
                    elem.setAttribute("value", `${contador}`)
                    contador++;
                })
                const divSelected = arregloCarusel1.find(elem =>{
                    return elem.getAttribute("value") == valorDiv;
                })      
                arregloCarusel1.forEach(elem =>{
                    elem.classList = "no-selected";
                    if(elem === divSelected){
                        elem.removeAttribute("class");
                        elem.setAttribute("class", "selected")                        
                    }   

                })
            }
        })
    }

    function btnRegresar(input){
        let valorA = 0;
        radioC1.forEach(elem =>{ 
            if(elem.hasAttribute("checked")){                            
                elem.removeAttribute("checked")
                valorA = elem.getAttribute("value");
            }           
        })       
        if(valorA <= 1) valorA = 5;
        valorA--;
        radioC1.forEach(elem =>{
            if(elem.getAttribute("value") ==  valorA){
                elem.setAttribute("checked", "")
                let valorDiv = valorA - 1;
                let contador = 0;
                arregloCarusel1.forEach(elem =>{                   
                    elem.setAttribute("value", `${contador}`)
                    contador++;
                })
                const divSelected = arregloCarusel1.find(elem =>{
                    return elem.getAttribute("value") == valorDiv;
                })      
                arregloCarusel1.forEach(elem =>{
                    elem.classList = "no-selected";
                    if(elem === divSelected){
                        elem.removeAttribute("class");
                        elem.setAttribute("class", "selected")   
                        if(elem.getAttribute("value") == 3){
                            elem.removeAttribute("hidden");
                            carrusel1.appendChild(elem)
                        } 
                    }                   
                })
            }
        })
    }
    const moverScrol = (signo) =>{
        carrusel2div.scrollBy({
            top: 0,
            left: `${signo}`+250,
            behavior: "smooth"
        })
        if(signo === '+'){
            
        }
    }
    btnSiguienteC2.addEventListener("click", e =>{
        moverScrol('+');
    })
    btnRegresarC2.addEventListener("click", e=>{
        moverScrol('-')
    })
})



