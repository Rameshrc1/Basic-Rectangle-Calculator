export class Rectangle{
    private width: number;
    private hight: number;

    constructor(w: number, h: number){
        this.width = w;
        this.hight = h;   
    }

    public getArea(): number {
        return this.width * this.hight;
    }

    public getPerameter(): number {
        return 2 * (this.width + this.hight);
    }

}