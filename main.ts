import { Punto } from './clasePunto';

let punto1:Punto = new Punto(10,5);
let punto2:Punto = new Punto(6,8);

console.log(punto1.getX());
console.log(punto1.getY());
console.log(punto1.distanciaAlOrigen());
console.log(punto1.calcularDistancia(punto2));
