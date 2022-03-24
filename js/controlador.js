import { nombrePersona } from "./generadorNombre.js"
import { estatura } from "./generadorEstatura.js"
import{TOKEN} from "./generarToken.js"
import{consumirAPI} from "./servicio.js"
import{generarURI}from "./generadorURI.js"

//console.log("Su nombre es: "+nombrePersona)
//console.log("Su estatura es: "+estatura)
//console.log("Su Token es: "+TOKEN)

//Detectar clic boton de formulario

let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){

    evento.preventDefault()
    let frutaSeleccionada=document.getElementById("fruta").value
    //console.log("La fruta seleccionada es: "+frutaSeleccionada)

    //console.log(uri)
    //console.log(generarURI)
    let URI=generarURI(frutaSeleccionada)
    //console.log(URI)

    async function activarAPI(){
    let datosConsultadosAPI=await consumirAPI(URI,TOKEN)
    console.log(datosConsultadosAPI)
   }
  
 activarAPI()

    
})
