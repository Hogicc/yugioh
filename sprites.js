function drawPigeon(ctx, x, y, scale = 1) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  ctx.fillStyle = "#999";
  ctx.beginPath();
  ctx.ellipse(0, 0, 20, 15, 0, 0, Math.PI * 2);
  ctx.fill();
  // oči i kljun
  ctx.fillStyle = "#000";
  ctx.beginPath();
  ctx.arc(8, -5, 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#f90";
  ctx.beginPath();
  ctx.moveTo(20, 0);
  ctx.lineTo(30, 5);
  ctx.lineTo(20, 10);
  ctx.fill();
  ctx.restore();
}

function drawBreadcrumb(ctx, x, y, scale = 1) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  ctx.fillStyle = "#f5e06e";
  ctx.beginPath();
  ctx.arc(0, 0, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

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
