"use strict"

let bolillero = ()=>{
    let cantidad_bolillas = [];
    let i= 0;
    while(i <= 99){
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
console.log(bolillero())
console.log("\n\n\n")
console.log(bolillero().shuffle())

let jugar_numeros =()=>{
    let bolillas_totales =  bolillero().shuffle();
    let numeros_random = [];
    while(numeros_random.length<8){
        numeros_random.push(bolillas_totales.shift());
    }
    return numeros_random;
    
}
console.log(jugar_numeros())