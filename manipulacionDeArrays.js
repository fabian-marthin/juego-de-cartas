let numCartas = [1,2,3,4,5,6,7,8];
let cartas = [];

let jugador1 = [];
let computadora = [];

let numCartasRep = parseInt(prompt("cuantas cartas quires repartir para cada jugador"))

for (let i = 0; i < numCartas.length; i++) {
    cartas.push(numCartas[i]+"♥")
    cartas.push(numCartas[i]+"♦")
    cartas.push(numCartas[i]+"♣")
    cartas.push(numCartas[i]+"♠")
}
repartirJugador()

function repartirJugador(){
    if (numCartasRep<=10) {
        for (let j = 0; j < numCartasRep; j++) {
            let elegirCarta = Math.floor(Math.random()*(cartas.length+1));
            jugador1[j] = cartas.splice(elegirCarta,1);
        }
    }else{
        alert("debes elegir menos cartas")
        repartirJugador()
    }    
    repartirAComputadora()
}

function repartirAComputadora (){
    if (numCartasRep<=10) { 
        for (let k = 0; k < numCartasRep; k++) {
            let elegirCarta = Math.floor(Math.random()*(cartas.length+1));
            computadora[k] = cartas.splice(elegirCarta,1)
        }
    }else{
        alert("debes elegir menos cartas")
        repartirJugador()
    }   
    validarcartas()
}
function validarcartas() {

    let puntaje = 0;
    let puntajeComp = 0;
    let contadorSim = {contadorCorazon:0, contadorPicas:0, contadorDiamantes:0, contadorTrevoles:0};
    let contadorNum = [0,0,0,0,0,0,0,0];
    let contadorNumComp = [0,0,0,0,0,0,0,0];

    for (let i = 0; i < jugador1.flat().length; i++) {
        if (jugador1.flat()[i].match(/♥/)) {
            contadorSim.contadorCorazon++
        }else if(jugador1.flat()[i].match(/♦/)){
            contadorSim.contadorDiamantes++
        }else if(jugador1.flat()[i].match(/♣/)){
            contadorSim.contadorTrevoles++
        }else if(jugador1.flat()[i].match(/♠/)){
            contadorSim.contadorPicas++
        }
    }

    for (let i = 0; i < jugador1.flat().length; i++) {
        if (jugador1.flat()[i].match(/1/)) {
            contadorNum[0]+=1;
        }else if(jugador1.flat()[i].match(/2/)){
            contadorNum[1]+=1;
        }else if(jugador1.flat()[i].match(/3/)){
            contadorNum[2]+=1;
        }else if(jugador1.flat()[i].match(/4/)){
            contadorNum[3]+=1;
        }else if(jugador1.flat()[i].match(/5/)){
            contadorNum[4]+=1;
        }else if(jugador1.flat()[i].match(/6/)){
            contadorNum[5]+=1;
        }else if(jugador1.flat()[i].match(/7/)){
            contadorNum[6]+=1;
        }
        else if(jugador1.flat()[i].match(/8/)){
            contadorNum[7]+=1;
        }
    }

    for (let i = 0; i < computadora.flat().length; i++) {
        if (computadora.flat()[i].match(/1/)) {
            contadorNumComp[0]+=1;
        }else if(computadora.flat()[i].match(/2/)){
            contadorNumComp[1]+=1;
        }else if(computadora.flat()[i].match(/3/)){
            contadorNumComp[2]+=1;
        }else if(computadora.flat()[i].match(/4/)){
            contadorNumComp[3]+=1;
        }else if(computadora.flat()[i].match(/5/)){
            contadorNumComp[4]+=1;
        }else if(computadora.flat()[i].match(/6/)){
            contadorNumComp[5]+=1;
        }else if(computadora.flat()[i].match(/7/)){
            contadorNumComp[6]+=1;
        }else if(computadora.flat()[i].match(/8/)){
            contadorNumComp[7]+=1;
        }
        
    }
const sistemaPuntaje = `Sistema de puntaje:
Si sacas pares tienes 200 puntos
Si sacas trios tienes 400 puntos
Si sacas cuartetos tienes 500 púntos`;
document.getElementById("sistemaPuntaje").innerHTML = sistemaPuntaje;


const jg = `Cartas del jugador ${jugador1.flat().sort()}`;
document.getElementById("jg").innerHTML = jg;

const pc = `Cartas del computador ${computadora.flat().sort()}`;
document.getElementById("pc").innerHTML = pc;
    
const contarNum = `Los números que tienes:
Número 1: ${contadorNum[0]}
Número 2: ${contadorNum[1]}
Número 3: ${contadorNum[2]}
Número 4: ${contadorNum[3]}
Número 5: ${contadorNum[4]}
Número 6: ${contadorNum[5]}
Número 7: ${contadorNum[6]}
Número 8: ${contadorNum[7]}`;

document.getElementById("contarNum").innerHTML = contarNum;

    for (let i = 0; i < contadorNum.length; i++) {
        if(contadorNum[i]==4){
            puntaje += 500;
            alert(`Tienes 4 cartas del mismo numero tienes ${puntaje}`)
        }else if(contadorNum[i]==3){
            puntaje += 400;
            alert(`Tienes 3 cartas del mismo numero tienes ${puntaje}`)
        }else if(contadorNum[i]==2){
            puntaje += 200;
            alert(`Tienes 2 cartas del mismo numero tienes ${puntaje}`)
        }
    }
    for (let i = 0; i < contadorNumComp.length; i++) {
        if(contadorNumComp[i]==4){
            puntajeComp += 500;
        }else if(contadorNumComp[i]==3){
            puntajeComp += 400;
        }else if(contadorNumComp[i]==2){
            puntajeComp += 200;
        }
    }

const puntos = `El puntaje del jugador es: ${puntaje}
El puntaje de la computadora es de ${puntajeComp}`;
document.getElementById("puntos").innerHTML = puntos;
   
    let win;
    if (puntaje>puntajeComp) {
        win = `GANASTEEEEE`
    }else if(puntaje<puntajeComp){
        win = `Lo siento sigue intentandolo`
    }else{
        win = `EMPATE`
    }
    document.getElementById("win").innerHTML = win;
}

