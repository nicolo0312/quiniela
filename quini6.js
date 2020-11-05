"use strict"

let bolillero = ()=>{
    let cantidad_bolillas = [];
    let i= 0;
    while(i <= 45){
        cantidad_bolillas.push(i);
        i=i+1;
    }
    return cantidad_bolillas;
}
Array.prototype.shuffle = function() {
    for ( var i = this.length-1; i > 0; i-- ) {
        var j = Math.floor( i * Math.random() );
        var tmp = this[ j ];
        this[ j ] = this[ i ];
        this[ i ] = tmp;
    }
    return this;
}

let jugar_numeros =()=>{
    let bolillas_totales =  bolillero().shuffle();
    let numeros_random = [];
    while(numeros_random.length<6){
        numeros_random.push(bolillas_totales.shift());
    }
    return numeros_random;
    
}
console.log(jugar_numeros())