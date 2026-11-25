let me;
let guests;
let colours = ["#e63946", "#2a9d8f", "#e9c46a", "#264653"];
let maxSpeed = 15;

function preload() {
  partyConnect("wss://demoserver.p5party.org", "tara", "tararoom1");
  me = partyLoadMyShared({ x: 200, y: 200, colour: random(colours) });
  guests = partyLoadGuestShareds();
}

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);

  me.x += map(rotationY, -90, 90, -maxSpeed, maxSpeed);
  me.y += map(rotationX, -180, 180, -maxSpeed, maxSpeed);

  me.x = constrain(me.x, 20, width - 20);
  me.y = constrain(me.y, 20, height - 20);

  for (let i = 0; i < guests.length; i++) {
    let g = guests[i];
    if (g.x !== undefined && g.colour !== undefined) {
      fill(g.colour);
      ellipse(g.x, g.y, 40, 40);
    }
  }
}