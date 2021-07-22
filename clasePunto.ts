export class Punto
{
    private x:number;
    private y:number;

    constructor(x:number, y:number)
    {
        this.x = x;
        this.y = y;
    }

    getX():number
    {
        return this.x
    }

    getY():number
    {
        return this.y
    }

    setX(x:number):void
    {
        this.x = x;
    }

    setY(y:number):void
    {
        this.x = y;
    }

    toString()
    {
        let texto = this.x.toString()+ "," + this.y.toString();
        return  "●" + "\t" + '"' + "(" + texto + ")" + '"'; 
    }

    distanciaAlOrigen():number
    {
        let distanciaAlOrigen:number = parseFloat(((Math.hypot(this.getX(),this.getY())).toFixed(3)));
        return distanciaAlOrigen
    }

    calcularDistancia(otroPunto:Punto):number
    {
        let calcularDistancia:number = parseFloat((Math.hypot((this.getX() - otroPunto.getX(),this.getY() - 
                                                 otroPunto.getY())).toFixed(3)));       
        return calcularDistancia
    }

    calcularCuadrante():number
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

    calcularMasCercano(puntos:Punto[]):Punto
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
