export class Punto
{
    private x:number;
    private y:number;

    constructor(x:number, y:number)
    {
        this.x = x;
        this.y = y;
    }

    public getX():number
    {
        return this.x
    }

    public getY():number
    {
        return this.y
    }

    public setX(x:number):void
    {
        this.x = x;
    }

    public setY(y:number):void
    {
        this.x = y;
    }

    public toString()
    {
        let texto = this.x.toString()+ "," + this.y.toString();
        return  "●" + "\t" + '"' + "(" + texto + ")" + '"'; 
    }

    public distanciaAlOrigen():number
    {
        let distanciaAlOrigen:number = parseFloat(((Math.hypot(this.getX(),this.getY())).toFixed(3)));
        return distanciaAlOrigen
    }

<<<<<<< HEAD
    calcularDistancia(otroPunto:Punto):number
=======
    public calcularDistancia(otroPunto:Punto):number
>>>>>>> fa8c4ca (feature<clasePunto.ts><claseTriangulo.ts><main.ts>: Crea clase triangulo, Private a metodos, Implementa metodos en main)
    {
        let calcularDistancia:number = parseFloat((Math.hypot((this.getX() - otroPunto.getX(),this.getY() - 
                                                 otroPunto.getY())).toFixed(3)));       
        return calcularDistancia
    }

<<<<<<< HEAD
    calcularCuadrante():number
=======
    public calcularCuadrante():number
>>>>>>> fa8c4ca (feature<clasePunto.ts><claseTriangulo.ts><main.ts>: Crea clase triangulo, Private a metodos, Implementa metodos en main)
    {
        let cuadrante:number = 0;

        if(this.getX() > 0 && this.getY() > 0)
        {
            cuadrante = 1;
        }
        else if(this.getX() < 0 && this.getY() > 0)
        {
            cuadrante = 2;
        }
        else if(this.getX() > 0 && this.getY() < 0)
        {
            cuadrante = 3;
        }
        else if(this.getX() < 0 && this.getY() < 0)
        {
            cuadrante = 4;
        }
    return cuadrante
    }

<<<<<<< HEAD
    calcularMasCercano(puntos:Punto[]):Punto
=======
    public calcularMasCercano(puntos:Punto[]):Punto
>>>>>>> fa8c4ca (feature<clasePunto.ts><claseTriangulo.ts><main.ts>: Crea clase triangulo, Private a metodos, Implementa metodos en main)
    {
        let puntoReferencia:number = 0;
        let distancia:number = this.calcularDistancia(puntos[0]);

        for(let i = 0; i < puntos.length; i++)
        {
            if(this.calcularDistancia(puntos[i]) < distancia)
            { 
                distancia = this.calcularDistancia(puntos[i]);
                puntoReferencia = i
            }
        }
        return puntos[puntoReferencia];
    }
}
