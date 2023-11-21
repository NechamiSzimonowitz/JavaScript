

const canvas = document.querySelector('#theCanvas');
const context = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let RADIUS;
let ballInterval;
let balls = [];

const newButton = document.getElementById('new');
newButton.addEventListener('click', () => {
    RADIUS = parseInt(document.getElementById('size').value);
    const ballColor = document.getElementById('color').value;



    const newBall = {
        x: RADIUS,
        y: RADIUS,
        dx: .5,
        dy: 1,
        radius: RADIUS,
        color: ballColor
    }
    balls.push(newBall);


    clearInterval(ballInterval);
    ballInterval = setInterval(() => drawBall(), 1);
})


function drawBall() {
    context.clearRect(0, 0, 10000, 5000);
    balls.forEach(ball => {
        context.beginPath();
        context.fillStyle = ball.color;
        context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        context.fill();



        ball.x += ball.dx;
        ball.y += ball.dy;

        if (ball.x < ball.radius || ball.x > window.innerWidth - ball.radius) {
            ball.dx = -ball.dx;
        }

        if (ball.y < ball.radius || ball.y > window.innerHeight - ball.radius) {
            ball.dy = -ball.dy;
        }
    })
}


