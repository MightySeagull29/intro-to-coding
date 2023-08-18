/// <reference path= "lib/p5.global.d.ts"/>

var setup = function () {
  createCanvas(1250, 600);
  frameRate(noLoop(0));
};
var draw = function () {
  background(255, 0, 255);
  triangle(1, 1, 5, 6, 6, 3);
};
