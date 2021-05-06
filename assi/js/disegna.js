function disegna() {
    var c = document.getElementById('assi');
    const Ox = c.width / 2;
    const Oy = c.height / 2;
    const u = 20;
    var ctx = c.getContext("2d");
    ctx.strokeStyle = "rgba(120,120,120,0.5)"
    ctx.fillStyle = "rgba(120,120,120,0.5)"
    ctx.lineTo(Ox + 50 + u, 20);
    ctx.moveTo(20, Oy);
    ctx.lineTo(c.width - 20, Oy);
    ctx.moveTo(c.width - 20, Oy - 4);
    ctx.lineTo(c.width - 20, Oy + 4);
    ctx.lineTo(c.width - 12, Oy);
    ctx.lineTo(c.width - 20, Oy - 4);
    ctx.moveTo(Ox, 20);
    ctx.lineTo(Ox, c.height - 20);
    ctx.moveTo(Ox - 4, 20);
    ctx.lineTo(Ox + 4, 20);
    ctx.lineTo(Ox, 12);
    ctx.lineTo(Ox - 4, 20);
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = "rgb(0,0,0)"
    ctx.fillText('x', c.width - 20, Oy + 10);
    ctx.fillText('y', Ox + 5, 20);
    ctx.fillText('O', Ox + 2, Oy + 10);
    ctx.translate(Ox, Oy);
}