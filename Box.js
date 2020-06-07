class Box{
    constructor(x, y, height, width){
        var property = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, property);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255, 0, 0);
        rect(pos.x, pos.y+20, this.width, this.height);
    }
}