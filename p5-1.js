/// <reference path= "lib/p5.global.d.ts"/>

var setup = function () {
  createCanvas(1250, 600);
  frameRate(2);
};
var draw = function () {
  background(random(255), random(255), random(255));

  for (let y = 0; y < 1500; y += 35) {
    for (let x = 0; x < 1500; x += 35) {
      fill(random(0, 45), random(0, 45), random(0, 45));
      square(x, y, random(25, 35));
    }
  }
  fill(random(155, 255), random(155, 255), random(155, 255));
  circle(random(1250), random(600), 55);
};
//
//random(10), random(45), random(80, 255)
