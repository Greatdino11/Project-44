class Player1{
    constructor(x, y){
        var options = {
            isStatic: false,
            restitution: 0
        }

        this.image = loadImage("red.png");
        this.width = 50;
        this.height = 50;
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        //var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(0);
        imageMode(CENTER);
        image(this.image, this.x, this.y, 25, 25);
        pop();
    }
}