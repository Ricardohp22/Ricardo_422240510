let numeroMaquina = Math.floor(Math.random() * (10 -1) +1);
console.log(numeroMaquina);

let numeroUsuario = parseInt(prompt("ingresa un numero del 1 al 10"));

let vidas = 3;

while((numeroMaquina != numeroUsuario) && (vidas > 1)){
    vidas --;
    numeroUsuario = parseInt(prompt("vuelve a intentarlo"));
}
if(numeroMaquina === numeroUsuario){
    console.log("ganaste");
}