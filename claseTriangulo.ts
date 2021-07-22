import { Punto } from './clasePunto';

export class Triangulo
{
    private vertice1:Punto;
    private vertice2:Punto;
    private vertice3:Punto;

    constructor(vertice1:Punto, vertice2:Punto, vertice3:Punto)
    {
        this.vertice1 = vertice1;
        this.vertice2 = vertice2;
        this.vertice3 = vertice3;
    }

    public calcularLongitudLados():number[]
    {
        let longitudes:number [] = new Array()

        longitudes.push(this.vertice1.calcularDistancia(this.vertice2));
        longitudes.push(this.vertice2.calcularDistancia(this.vertice3));
        longitudes.push(this.vertice3.calcularDistancia(this.vertice1));

        return longitudes;
    }
}