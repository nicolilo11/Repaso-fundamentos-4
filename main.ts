import { Punto } from './clasePunto';
import { Triangulo } from './claseTriangulo';

let punto1:Punto = new Punto(10,5);
let punto2:Punto = new Punto(15,10);
let punto3:Punto = new Punto(20,15);
let punto4:Punto = new Punto(25,20);

let triangulo1:Triangulo = new Triangulo(punto2, punto3,punto4);

console.log(punto1.getX());
console.log(punto1.getY());
console.log(punto1.distanciaAlOrigen());
console.log(punto1.calcularDistancia(punto2));
console.log(punto1.calcularCuadrante());
console.log(punto1.calcularMasCercano([punto2, punto3, punto4]));

console.log(triangulo1.calcularLongitudLados());


