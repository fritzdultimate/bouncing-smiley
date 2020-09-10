const grav = 0.9;
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let cx = window.innerWidth;
let cy = window.innerHeight;
canvas.width = cx;
canvas.height = cy;

function ball() {
    let color = 'green',
        radius = cx / 10,
        x = Math.random() * (radius * 2) + radius,
        y = Math.random() * (cy - radius),
        dy = (cy/2)/(cy/10), 
        dx = (cx/2)/(cx/10), 
        vel = 0.05;
        console.log(cy/2, cy/20)
    return {
        radius,
        x,
        y,
        dy,
        dx,
        vel,
        color,
        update() {
            // draw the round face
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            ctx.fillStyle = this.color;
            ctx.fill();

            // draw the mouth
            ctx.beginPath()
            ctx.lineWidth = 2
            ctx.moveTo(this.x + 35, this.y);
            ctx.arc(this.x, this.y, 35, 0, Math.PI, false);
            ctx.strokeStyle = 'rgba(31, 24, 24, 0.7)';
            ctx.stroke();

            // draw the left eye
            ctx.beginPath()
            ctx.moveTo(this.x - 5, this.y - 5);
            ctx.arc(this.x - 15, this.y - 15, 5, 0, Math.PI * 2, true)
            ctx.fillStyle = 'black';
            ctx.fill()

            // left white spot
            ctx.beginPath()
            ctx.moveTo(this.x + 5, this.y - 5);
            ctx.arc(this.x - 14, this.y - 15, 1, 0, Math.PI * 2, true)
            ctx.fillStyle = 'white';
            ctx.fill()

            // draw the right eye
            ctx.beginPath()
            ctx.moveTo(this.x + 15, this.y - 5);
            ctx.arc(this.x + 10, this.y - 15, 5, 0, Math.PI * 2, true);
            ctx.fillStyle = 'black';
            ctx.fill()

            // right white spot
            ctx.beginPath()
            ctx.moveTo(this.x + 15, this.y - 5);
            ctx.arc(this.x + 11, this.y - 15, 1, 0, Math.PI * 2, true)
            ctx.fillStyle = 'white';
            ctx.fill()

        }
    }
}

function randomColor() {
    return `rgb(${Math.floor(Math.random() * 250)}, ${Math.floor(Math.random() * 250)}, ${Math.floor(Math.random() * 250)})`
}

let bal = ball();
console.log(bal)

function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, cx, cy);
    bal.update()
    bal.x += bal.dx;
    bal.y += bal.dy;

    if (bal.x + bal.radius > cx || bal.x - bal.radius < 0) {
        bal.dx = -bal.dx;
        bal.color = randomColor();
    }
    if (bal.y + bal.radius > cy || bal.y - bal.radius < 0) {
        bal.dy = -bal.dy;
        bal.color = randomColor();
    }
}

animate()