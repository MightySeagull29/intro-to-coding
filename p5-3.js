/// <reference path= "lib/p5.global.d.ts"/>
class Shape {
  constructor() {
    this.x = random(500);
    this.y = random(500);
    this.vx = random(-5, 5);
    this.vy = random(-5, 5);
    this.z = 300;
    this.vz = -0.5;
    this.color = [random(1, 255), random(1, 255), random(1, 255)];
  }

  draw() {
    fill(this.color);
    if (this.x < 0 || this.x > 1250) {
      this.vx = -this.vx;
      bounce++;
    }
    if (this.y < 0 || this.y > 600) {
      this.vy = -this.vy;
      bounce++;
    }
    if (this.z >= 350 || this.z < -300) {
      this.vz = -this.vz;
    }
  }
}
class Circle extends Shape {
  draw() {
    super.draw();
    circle((this.x += this.vx), (this.y += this.vy), (this.z += this.vz));
  }
}
class Square extends Shape {
  draw() {
    super.draw();
    square((this.x += this.vx), (this.y += this.vy), (this.z += this.vz));
  }
}
let shapes = [];

var setup = function () {
  createCanvas(1250, 600);

  for (bounce = 1; bounce < bounces; bounce++) {
    shapes.push(new Circle());
    shapes.push(new Square());
  }
};

var draw = function () {
  background(100, 0);
  for (Shape of shapes) {
    Shape.draw();
  }
};
let bounce = 1;
let bounces = 100;
