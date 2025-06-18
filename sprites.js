// Golub (klasičan)
function drawPigeon(ctx, x, y, scale = 1) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  // telo
  ctx.fillStyle = "#555";
  ctx.fillRect(0, 0, 12, 8);

  // glava
  ctx.fillStyle = "#ccc";
  ctx.fillRect(3, -4, 6, 6);

  // kljun
  ctx.fillStyle = "orange";
  ctx.fillRect(9, -1, 3, 2);

  ctx.restore();
}

// Mrvica hleba
function drawBreadcrumb(ctx, x, y, scale = 1) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  ctx.fillStyle = "#f4d35e"; // boja hleba
  ctx.fillRect(0, 0, 6, 4);
  ctx.fillRect(1, -1, 4, 2); // "zaobljen" vrh

  ctx.restore();
}

// Priča (prepreka)
function drawStory(ctx, x, y, scale = 1) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  ctx.fillStyle = "#d63031";
  ctx.fillRect(0, 0, 20, 20);

  ctx.fillStyle = "#fff";
  ctx.font = "16px Arial";
  ctx.fillText("P", 5, 16);

  ctx.restore();
}
