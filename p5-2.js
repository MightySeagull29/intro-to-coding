/// <reference path= "lib/p5.global.d.ts"/>

var setup = function () {
  createCanvas(1250, 600);
  shape = {
    x: 50,
    y: 50,
    z: 100,
    vx: 3,
    vy: 3,
    draw: function () {
      fill("magenta");
      if (this.x - 50 < 0 || this.x + 50 > 1250) {
        this.vx = -this.vx;
        this.vx * 1.2;
        // bounce();
      }
      if (this.y - 50 < 0 || this.y + 50 > 600) {
        this.vy = -this.vy;
        this.vy * 1.2;
        // bounce();
      }
      circle((this.x += this.vx), (this.y += this.vy), this.z);
    },
  };

  shape1 = {
    x: 100,
    y: 100,
    z: 50,
    vx: 1.5,
    vy: -2.5,
    bounce: 1,
    draw: function () {
      fill("red");
      if (this.x - 25 < 0 || this.x + 25 > 1250) {
        this.vx = -this.vx;
        // bounce++;
      }
      if (this.y - 25 < 0 || this.y + 25 > 600) {
        this.vy = -this.vy;
        // bounce++;
      }
      circle((this.x += this.vx), (this.y += this.vy), this.z);
    },
  };
  shape2 = {
    x: 1000,
    y: 400,
    z: random(150, 200),
    vx: random(1, 3.5),
    vy: random(-1.5, 2),
    bounce: 1,
    draw: function () {
      fill("black");
      if (this.x - this.z / 2 < 0 || this.x + this.z / 2 > 1250) {
        this.vx = -this.vx;
        // bounce++;
      }
      if (this.y - this.z / 2 < 0 || this.y + this.z / 2 > 600) {
        this.vy = -this.vy;
        // bounce++;
      }
      circle(
        (this.x += this.vx),
        (this.y += this.vy),
        (this.z += random(0, 0.1))
      );
    },
  };
};
shape3 = {
  x: 100,
  y: 100,
  z: 25,
  vx: 3,
  vy: 3.5,
  bounce: 1,
  draw: function () {
    fill("lime");
    if (this.x - 25 < 0 || this.x + 25 > 1250) {
      this.vx = -this.vx;
      // bounce++;
    }
    if (this.y - 25 < 0 || this.y + 25 > 600) {
      this.vy = -this.vy;
      // bounce++;
    }
    circle((this.x += this.vx), (this.y += this.vy), this.z);
  },
};

var draw = function () {
  background(100);
  // for (b = 0; b < bounce; b++) {
  shape.draw();
  // bounce(shape.draw());
  shape1.draw();
  shape3.draw();
  shape2.draw();
};
// };

let shape;
let b;
// let bounce = function () {
//   draw: function (){
// fill("yellow")((x = this.x)),
//     (y = this.y),
//     (z = random(25, 150)),
//     (vx = random(0.5, 2)),
//     (vy = random(0.5, 2));
// }
// };
