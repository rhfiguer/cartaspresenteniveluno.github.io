

//PROGRAMOS LA MUESTRA DE LA CARTA

var imgUnoRemoved = false;
var imgDosRemoved = false;
var turnos = 0;


function flip(event){ 
    var arr = [
        {
            "pregunta": "(1)\nNosotros [presente-CANTAR]",
            "respuesta": "(1)\n Nosotros CANTAMOS"
        },
        {
            "pregunta":"(2)\n Ellas [presente-HABLAR]",
            "respuesta":"(2)\n Ellas HABLAN"
        },
        {
            "pregunta": "(3) \n Ella [presente-VIVIR]",
            "respuesta": "(3) \n Ella VIVE"
        },
        {
            "pregunta": "(4) Yo[presente-CORRER]",
            "respuesta": "(4) \n Yo\nCORRO"
        },
        {
            "pregunta": "(5) \n Nosotros [presente-VIVIR]",
            "respuesta": "(5) \n Nosotros VIVIMOS"
        },
        {
            "pregunta": "(6) \n Él [presente-VIVIR]",
            "respuesta": "(6) \n Él VIVE"
        },
        {
            "pregunta": "(7) Nosotras [presente-ABRAZAR]",
            "respuesta": "(7) Nosotras ABRAZAMOS"
        },
        {
            "pregunta": "(8) Tú [presente-DIVIDIR]",
            "respuesta": "(8) Tú DIVIDES"
        },
        {
            "pregunta": "(9) Nosotras [presente-REVIVIR]",
            "respuesta": "(9) Nosotras REVIVIMOS"
        },
        {
            "pregunta": "(10) Oversett: VI ØNSKER",
            "respuesta": "(10) Nosotros(as) DESEAMOS"
        },
        {
            "pregunta": "(11) Oversett: DU DRIKKER",
            "respuesta": "(11) Tú BEBES"
        },
        {
            "pregunta": "(12) Oversett: HUN SYNGER",
            "respuesta": "(12) Ella CANTA"
        },
        {
            "pregunta": "(13) Oversett: DU OG EG LØPER",
            "respuesta": "(13) Tú y yo CORREMOS"
        },
        {
            "pregunta": "(14) Oversett: VI EKSISTERER IKKE",
            "respuesta": "(14) Nosotros(as) NO EXISTIMOS"
        },
        {
            "pregunta": "(15) Oversett: JEG OG HUN TRENGER",
            "respuesta": "(15) Yo y ella NECESITAMOS"
        },
        {
            "pregunta": "(16) Oversett: HAN SPARER",
            "respuesta": "(16) Él AHORRA"
        },
        {
            "pregunta": "(17) Oversett: JEG SPISER",
            "respuesta": "(17) Yo COMO"
        },
        {
            "pregunta": "(18) CORREMOS",
            "respuesta": "(18) Vi løper"
        },
        {
            "pregunta": "(19) Oversett: CANTA",
            "respuesta": "(19) Hun/Han SYNGER"
        },
        {
            "pregunta": "(20) Oversett: VIVEN",
            "respuesta": "(20) De BOR eller LEVER"
        },
        {
            "pregunta": "(21) Oversett: DESCANSO",
            "respuesta": "(21) Jeg slapper av"
        },
        {
            "pregunta": "(22) Oversett: AMAS",
            "respuesta": "(22) Du elsker"
        },
    ]
    
    var i = arr.length-1, j, temp;

    while(i > 0, i--){
        j = Math.floor(Math.random() * (arr.length));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }

    
    var respuesta = arr[0].respuesta;
    document.getElementById("button-respuesta").addEventListener("click", function() {
        document.getElementById("parrafo-dos").innerHTML = respuesta;
      });


    var randomCart = arr[0].pregunta;
    var textoCarta = document.getElementById("parrafo");
    textoCarta.innerHTML = randomCart; 
    
}




   document.getElementById("button-siguiente").addEventListener("click", function() {
        var portadaUno = document.getElementById("fondo-respuesta");
        var portadaDos = document.getElementById("portada-dos");
        portadaUno.style.backgroundColor = "orange";
        document.getElementById("parrafo-dos").innerText = "RESPUESTA";
        portadaDos.style.backgroundColor = "orange";
        document.getElementById("parrafo").innerText = "PREGUNTA";

    });
/*   
function siguientePregunta(){
        var portadaUno = document.getElementById("portada-uno");
        var portadaDos = document.getElementById("portada-dos");
        portadaUno.style.backgroundColor = "black";
    }
    setTimeout(() => siguientePregunta(), 9000);   

    

    






   




   



            

        
    
    
        



    


    












/*
const cardsArray = Array.from(cards);
console.log(cardsArray);
*/

/*
let cardsShuffle = function (cardsArray){
    let newPos;
    for (let i = cardsArray.lenght -1; i> 0; i--){
        newPos = Math.floor(Math.random()* ( i+1));
        temp = cardsArray[i];
        cardsArray[i]=cardsArray[newPos];
        cardsArray[newPos] = temp;
    }
    return cardsArray;
};
*/














    

  
   

 





