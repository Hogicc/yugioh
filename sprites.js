// sprites.js

// Funkcija koja crta goluba na canvas 2D context
// x, y - pozicija; scale - veličina; ctx - canvas context
function drawPigeon(ctx, x, y, scale = 1) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  // crtanje goluba - pixel art stil
  // telo
  ctx.fillStyle = "#b0b0b0"; 
  ctx.fillRect(0, 10, 40, 20); // telo

  // glava
  ctx.fillStyle = "#c0c0c0";
  ctx.fillRect(35, 5, 15, 15);

  // oko
  ctx.fillStyle = "#000";
  ctx.fillRect(45, 10, 5, 5);

  // krila
  ctx.fillStyle = "#909090";
  ctx.fillRect(10, 5, 25, 10);

  // rep
  ctx.fillStyle = "#808080";
  ctx.fillRect(-10, 15, 10, 10);

  ctx.restore();
}

// Funkcija koja crta mrvicu hleba (mrvice) - mala žuta kvadratić
function drawBreadcrumb(ctx, x, y, scale = 1) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  ctx.fillStyle = "#f5d76e"; // žuta boja hleba
  ctx.fillRect(0, 0, 10, 10);

  // dodajemo male detalje (npr tačke)
  ctx.fillStyle = "#e1b12c";
  ctx.fillRect(2, 2, 2, 2);
  ctx.fillRect(6, 6, 2, 2);

  ctx.restore();
}
// Crtaj "priču" (npr. mali crveni kvadratić sa belim slovom P)
function drawStory(ctx, x, y, scale = 1) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  // telo
  ctx.fillStyle = "#d63031"; // crvena
  ctx.fillRect(0, 0, 20, 20);

  // slovo P u beloj boji
  ctx.fillStyle = "#fff";
  ctx.font = "16px Arial";
  ctx.fillText("P", 5, 16);

  ctx.restore();
}
