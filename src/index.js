const config = {
    screen: {
        width: 600,
        height: 400,
    },
};

const canvas = document.getElementById('game-screen');
const ctx = canvas.getContext("2d");

canvas.width = config.screen.width;
canvas.height = config.screen.height;

ctx.fillStyle = '#00ff99';
ctx.fillRect(0, 0, config.screen.width, config.screen.height);