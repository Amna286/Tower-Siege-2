class Polygon {
    constructor(x, y) {
        var options = {
          'density': 4,
          'isStatic': false
        }
        this.body = Bodies.circle(x, y, 20, options);
        this.radius = 20;
        this.image = loadImage("polygon.png");

        World.add(world, this.body);
      }
      display() {
        var angle = this.body.angle;
        var pos = this.body.position;

        push();

        translate(pos.x, pos.y);
        rotate(angle);

        imageMode(CENTER);
        image(this.image, 0, 0, this.radius*2, this.radius*2);
        pop();
      }
}
