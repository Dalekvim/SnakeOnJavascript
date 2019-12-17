var $canvas = $("#snakeGame");
console.log(document.getElementById("snakeGame").style.height);
const squareDimension = 10;

let i = 150;
let j = 75;

function snake(i, j) {
    $canvas.drawRect({
        fillStyle: "blue",
        width: squareDimension,
        height: squareDimension,
        x: i, y: j
    });
};

snake(i, j);
