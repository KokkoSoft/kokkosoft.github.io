'use strict'
/* BringTwitterBack(); */
var x0 = 0; var x0rx = 0; var x0ry = 0; var x0rs = 0;
const x0t = document.getElementById("Xing0");
const x0s = document.getElementById("x0");

function BringTwitterBack0() {
	x0 += 1; x0rs = x0 * 2.5;
  if (x0 >= 12) {
    x0t.textContent = "Twitter";
  }
}

setInterval(BringTwitterBackRunningBg, 15);

function BringTwitterBackRunningBg() {
	x0rx = Math.floor(Math.random() * (x0rs * 2 + 1)) - (x0rs + 1);
	x0ry = Math.floor(Math.random() * (x0rs * 2 + 1)) - (x0rs + 1);
  x0rs -= x0rs / 2000;
  x0s.style.transform = "translate(" + x0rx + "px, " + x0ry + "px)";
}