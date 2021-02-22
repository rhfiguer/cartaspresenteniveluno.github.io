//PROGRAMAMOS EL CRONÓMETRO
var segundos = 30
var cronometro = document.getElementById("cronometro");
i=1;
var stop = false;
function actualizarCronometro(){
    if(i=1 && i<30 && segundos >0 && stop ==false){
        segundos = segundos -1;
        cronometro.innerHTML = segundos;
        i++;
        if(i == 30 ){
            stop = true;
            }

    }
}
setInterval(actualizarCronometro,1000);

export { segundos, cronometro, stop, actualizarCronometro };