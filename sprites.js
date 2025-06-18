// sprites.js

function drawPigeon(ctx, x, y, scale = 1) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  // Telo goluba - svetlo sivo
  ctx.fillStyle = "#bbb";
  ctx.beginPath();
  ctx.ellipse(0, 0, 20, 15, 0, 0, 2 * Math.PI);
  ctx.fill();

  // Glava - tamno sivo
  ctx.fillStyle = "#888";
  ctx.beginPath();
  ctx.ellipse(15, -10, 10, 10, 0, 0, 2 * Math.PI);
  ctx.fill();

  // Oko - belo sa crnim
  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.arc(18, -12, 5, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "#000";
  ctx.beginPath();
  ctx.arc(18, -12, 2, 0, 2 * Math.PI);
  ctx.fill();

  // Kljun - narandžasti trokut
  ctx.fillStyle = "#f90";
  ctx.beginPath();
  ctx.moveTo(25, -10);
  ctx.lineTo(35, -8);
  ctx.lineTo(25, -5);
  ctx.closePath();
  ctx.fill();

  ctx.restore();
}

function drawBreadcrumb(ctx, x, y, scale = 1) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  ctx.fillStyle = "#f4a261"; // boja hleba
  ctx.beginPath();
  ctx.arc(0, 0, 6, 0, 2 * Math.PI);
  ctx.fill();

  ctx.restore();
}

function drawStory(ctx, x, y, scale = 1) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  // Crvena prepreka kvadrat
  ctx.fillStyle = "#d63031";
  ctx.fillRect(-15, -15, 30, 30);

  // Slovo "P" za priču
  ctx.fillStyle = "#fff";
  ctx.font = "bold 20px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("P", 0, 0);

  ctx.restore();
}
