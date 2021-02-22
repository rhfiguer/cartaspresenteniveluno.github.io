

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
            "pregunta": "(22) Oversett: Cantamos una canción",
            "respuesta": "(22) Vi synger en sang"
        },
        {
            "pregunta": "(23) Oversett: Tú y yo miramos el auto",
            "respuesta": "(23) Du og jeg ser på bilen"
        },
        {
            "pregunta": "(24) Oversett: AMAS",
            "respuesta": "(24) Du elsker"
        },
        {
            "pregunta": "(25) Oversett: Ella necesita ayuda",
            "respuesta": "(25) Hun trenger hjelp"
        },
        {
            "pregunta": "(26) Oversett: Yo deseo un gato en navidad",
            "respuesta": "(26) Jeg ønsker en kat på jul"
        },
        {
            "pregunta": "(27) Oversett: Él bebe mucha agua",
            "respuesta": "(27) Han drikker mye vann"
        },
        {
            "pregunta": "(28) Oversett: Yo como desayuno temprano",
            "respuesta": "(28) Jeg spiser frokost tidlig"
        },
        {
            "pregunta": "(29) Oversett: Él habla mucho",
            "respuesta": "(29) Han snakker mye"
        },
        {
            "pregunta": "(30) Oversett: Ellos hablan poco",
            "respuesta": "(30) De snakker litt"
        },
        {
            "pregunta": "(31) Oversett: Tú adivinas el futuro",
            "respuesta": "(31) Du gjetter fremtiden"
        },
        {
            "pregunta": "(32) Oversett: Løper vi sammen?",
            "respuesta": "(32) ¿Corremos juntos?"
        },
        {
            "pregunta": "(33) Oversett: Jeg liker godteriet",
            "respuesta": "(33) Me gusta los dulces"
        },
        {
            "pregunta": "(34) Oversett: Jeg sparer penger nå",
            "respuesta": "(34) Yo ahorro dinero ahora"
        },
        {
            "pregunta": "(35) Oversett: Hun drikker mye melk",
            "respuesta": "(35) Ella bebe mucha leche "
        },
        {
            "pregunta": "(36) Oversett: Dere elsker naturen",
            "respuesta": "(36) Vosotros amáis la naturaleza"
        },
        {
            "pregunta": "(37) Oversett: Du ser på mye TV",
            "respuesta": "(37) Tú ves mucha TV"
        },
        {
            "pregunta": "(38) Oversett: De løper fort",
            "respuesta": "(38) Ellos/Ellas corren rápido"
        },
        {
            "pregunta": "(39) Oversett: Du trenger mye penger",
            "respuesta": "(39) Tú necesitas mucho dinero"
        },
        {
            "pregunta": "(40) Oversett: Hun spiser mat nå",
            "respuesta": "(40) Ella come comida ahora"
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














    

  
   

 





