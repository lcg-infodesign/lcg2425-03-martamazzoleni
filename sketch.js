let rivers = [];
let data;
let selectedRiver = null; //variabile fiume selezionato

function preload() {
  //datset
  data = loadTable("assets/rivers.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#F0EAD6"); 

  //linee fiumi
  for (let i = 0; i < data.getRowCount(); i++) {
    let name = data.getString(i, "name");
    let length = data.getNum(i, "length");
    let discharge = data.getNum(i, "discharge");

    let thickness = map(discharge, 285, 209000, 1, 5);
    let lineLength = map(length, 1072, 6575, 100, 500);
    let riverColor = color(0, 0, 139, 100); 

    let startX = random(100, width - 100);
    let startY = random(100, height - 100);
    let angle = random(-PI / 4, PI / 4);

    rivers.push({
      name,
      length,
      discharge,
      thickness,
      linePoints: generateLinePoints(startX, startY, lineLength, angle), 
      riverColor,
      isHovered: false
    });
  }
}

function draw() {
  background("#F0EAD6"); //sfondo 

  //titolo
  fill("#00008B");
  textSize(32);
  textAlign(RIGHT, TOP);
  text("Fiumi", width - 20, 20);

  //fiumi
  let hoveredRiver = null;

  for (let river of rivers) {
    let isHovered = isMouseOverLine(river.linePoints);

    // l'info solo per un fiume alla volta
    if (isHovered) {
      hoveredRiver = river;
    }

    push();
    strokeWeight(river === selectedRiver || river === hoveredRiver ? river.thickness + 2 : river.thickness);
    stroke(river === selectedRiver || river === hoveredRiver ? color(0, 0, 139) : river.riverColor);
    noFill();

    beginShape();
    for (let point of river.linePoints) {
      vertex(point.x, point.y);
    }
    endShape();
    pop();
  }

  //info del fiume 
  if (hoveredRiver) {
    showRiverInfo(hoveredRiver);
  }
}

function mousePressed() {
  //seleziona fiume al click
  for (let river of rivers) {
    if (isMouseOverLine(river.linePoints)) {
      selectedRiver = river;
      return;
    }
  }
  selectedRiver = null; //deseleziona
}

function showRiverInfo(river) {
  fill("#00008B");
  noStroke();
  textSize(16);
  textAlign(LEFT, TOP);
  text(
    `Nome: ${river.name}\nLunghezza: ${river.length} km\nPortata: ${river.discharge} m³/s`,
    20, 20
  );
}

//punti curva fiume
function generateLinePoints(startX, startY, lineLength, angle) {
  let points = [];
  for (let i = 0; i < lineLength; i++) {
    let x = startX + i * cos(angle);
    let y = startY + sin(i * 0.05) * 20;
    points.push({ x, y });
  }
  return points;
}

//controlla mouse 
function isMouseOverLine(linePoints) {
  let hoverDistance = 10; 
  for (let point of linePoints) {
    let d = dist(mouseX, mouseY, point.x, point.y);
    if (d < hoverDistance) {
      return true; 
    }
  }
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


