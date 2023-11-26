(function () {
    'use strict';

    const canvas = document.querySelector('#theCanvas');
    const context = canvas.getContext('2d');


    const createButton = document.getElementById('create');

    createButton.addEventListener('click', () => {
        const color = document.getElementById('color').value;
        const amount = parseInt(document.getElementById('amount').value);

        for (let i = 0; i < amount; i++) {
            ants.push(new Ant(color));
        }

        setInterval(() => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            ants.forEach(a => a.move());
        }, 100);
    })

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Ant {
        constructor(color) {
            this.x = window.innerWidth / 2;
            this.y = window.innerHeight / 2;
            this.color = color
        }

        draw() {
            context.fillRect(this.x, this.y, 3, 5);
            context.fillStyle = this.color;
        }

        move() {
            const Ydirection = Ant.#getRandomNumber(-1, 1);
            const Xdirection = Ant.#getRandomNumber(-1, 1);

            const times = Ant.getAmountOfTimes(0, 10);

            for (let i = 0; i < times; i++) {

                if (this.x > window.innerWidth) {
                    this.x = -this.x;
                }

                if (this.y > window.innerHeight) {
                    this.y = -this.y;
                }

                this.x += Xdirection;
                this.y += Ydirection;
                this.draw();
            }

        }

        static #getRandomNumber(min, max) {
            return Math.floor(Math.random() * ((max - min) + 1)) + min;
        }
        static getAmountOfTimes(min, max) {
            return Math.floor(Math.random() * ((max - min) + 1)) + min;
        }
    }

    const ants = [];


}());