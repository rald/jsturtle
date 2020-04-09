var turtle = new Turtle(canvas.width / 2, canvas.height / 2);

function move(turtle, dist) {
  var sign = Math.sign(dist);

  function animation() {
    turtle.move(sign);
    dist -= sign;
    if (Math.abs(dist) >= 1) setTimeout(animation, 1000 / 60);
  }
  animation();
}

function turn(turtle, angle) {
  var sign = Math.sign(angle);

  function animation() {
    turtle.turn(sign);
    angle -= sign;
    if (Math.abs(angle) >= 1) setTimeout(animation, 1000 / 60);
  }
  animation();
}

move(turtle, 100);
turn(turtle, 90);
move(turtle, 100);