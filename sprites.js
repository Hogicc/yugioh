// Golub (pigeon) - sivo telo, oči, kljun
function drawPigeon(ctx, x, y, scale = 1) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  
  // Telo
  ctx.fillStyle = "#999";
  ctx.beginPath();
  ctx.ellipse(0, 0, 20, 15, 0, 0, Math.PI * 2);
  ctx.fill();
  
  // Glava
  ctx.beginPath();
  ctx.ellipse(15, -10, 10, 10, 0, 0, Math.PI * 2);
  ctx.fill();

  // Oči
  ctx.fillStyle = "#000";
  ctx.beginPath();
  ctx.arc(18, -14, 4, 0, Math.PI * 2);
  ctx.fill();

  // Kljun
  ctx.fillStyle = "#f90";
  ctx.beginPath();
  ctx.moveTo(25, -10);
  ctx.lineTo(35, -7);
  ctx.lineTo(25, -4);
  ctx.fill();

  ctx.restore();
}

// Mrvica hleba - žuti okrugli kružić
function drawBreadcrumb(ctx, x, y, scale = 1) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  ctx.fillStyle = "#f5e06e"; // žuta boja
  ctx.beginPath();
  ctx.arc(0, 0, 6, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

// Prepreka - oblak (beli sa senkom)
function drawObstacle(ctx, x, y, scale = 1) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  // Senka oblaka
  ctx.fillStyle = "rgba(0,0,0,0.2)";
  ctx.beginPath();
  ctx.ellipse(20, 20, 25, 15, 0, 0, Math.PI * 2);
  ctx.fill();

  // Oblak glavni beli
  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.ellipse(10, 10, 25, 15, 0, 0, Math.PI * 2);
  ctx.ellipse(30, 5, 20, 15, 0, 0, Math.PI * 2);
  ctx.ellipse(40, 15, 25, 15, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}
