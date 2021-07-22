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

    public calcularDistancia(otroPunto:Punto):number
    {
        let calcularDistancia:number = parseFloat((Math.hypot((this.getX() - otroPunto.getX(),this.getY() - 
                                                 otroPunto.getY())).toFixed(3)));       
        return calcularDistancia
    }

    public calcularCuadrante():number
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

    public calcularMasCercano(puntos:Punto[]):Punto
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
