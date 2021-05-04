class Block {
    constructor(x, y) {
        var options = {
          isStatic : false,
          density : 0.0005,
          friction : 0.005,
          restitution : 0,
        }
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.width = 30;
        this.height = 40;
        this.image = loadImage("block.png");
        this.visibility = 255;
        
        World.add(world, this.body);
      }
      display() {
        if(this.body.speed > 3) {
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility - 5;
          tint(255, this.visibility);
          image(this.image, this.body.position.x, this.body.position.y, 30, 40);
          pop();
        }
        else {
          var angle = this.body.angle;
          var pos = this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image, 0, 0, this.width, this.height);
          pop();
        }
      }
}