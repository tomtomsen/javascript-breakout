"use strict";

const config = {
    screen: {
        width: 600,
        height: 400,
    },
    theme: {
        background: '#00ff99',
        paddle: '#cccccc',
    },
    paddle: {
        width: 100,
        height: 20,
        speed: 2,
    },
};

let input = {
    left: false,
    right: false,
}

let paddle = {
    width: config.paddle.width,
    height: config.paddle.height,
    x: config.screen.width / 2 - config.paddle.width / 2,
    y: config.screen.height - config.paddle.height - 10,
}

const draw = (ctx) => {
    ctx.fillStyle = config.theme.paddle;
    ctx.fillRect(
        paddle.x,
        paddle.y,
        paddle.width, 
        paddle.height
    );
}

const update = () => {
    if (input.right) {
        paddle.x += config.paddle.speed;
    }

    if (input.left) {
        paddle.x -= config.paddle.speed;
    }

    if (paddle.x < 0) {
        paddle.x = 0;
    }

    if (paddle.x + paddle.width > config.screen.width) {
        paddle.x = config.screen.width - paddle.width;
    }
}

const clearScreen = () => {
    ctx.fillStyle = config.theme.background;
    ctx.fillRect(0, 0, config.screen.width, config.screen.height);
}

const canvas = document.getElementById('game-screen');
const ctx = canvas.getContext("2d");

const handleKeyboard = (e) => {
    let keydown = e.type == 'keydown';
    
    if (e.keyCode == 37) { 
        input.left = keydown;
    }

    if (e.keyCode == 39) {
        input.right = keydown;
    }
}

const init = () => {
    canvas.width = config.screen.width;
    canvas.height = config.screen.height;

    document.addEventListener('keydown', handleKeyboard);
    document.addEventListener('keyup', handleKeyboard);
}

const gameloop = () => {
    clearScreen();
    draw(ctx);
    update();
    requestAnimationFrame(gameloop)
}

init();
gameloop();