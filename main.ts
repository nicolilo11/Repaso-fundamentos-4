import { Punto } from './clasePunto';

let punto1:Punto = new Punto(10,5);
let punto2:Punto = new Punto(500,200);
let punto3:Punto = new Punto(600,400);
let punto4:Punto = new Punto(24,30);

console.log(punto1.getX());
console.log(punto1.getY());
console.log(punto1.distanciaAlOrigen());
console.log(punto1.calcularDistancia(punto2));
console.log(punto1.calcularCuadrante());
console.log(punto1.calcularMasCercano([punto2, punto3, punto4]));

