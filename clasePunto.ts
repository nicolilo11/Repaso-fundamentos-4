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

    calcularDistancia(p:Punto):number
    {
        let calcularDistancia:number = parseFloat((Math.hypot((this.getX() - p.getX(),this.getY() - p.getY())).toFixed(3)));       
        return calcularDistancia
    }
}
