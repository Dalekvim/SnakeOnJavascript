window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

var $canvas = $("#snakeGame");
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
function moveSnake(right, left, up, down)
{
    if (right)
    {
        return i += 1;
    }
    else if (left)
    {
        return i -= 1;
    }
    else if (up)
    {
        return j -= 1;
    }
    else if (down)
    {
        return j += 1;
    }
}

setInterval(function ()
{
    $canvas.drawRect({
        fillStyle: "black",
        width: 290,
        height: 140,
        x: 150, y: 75
    });
    
    snake(Math.round(i/10)*10, Math.round(j/10)*10);
    document.onkeydown = function(e) {
        return event = e.keyCode;
    }
    //right
    if (event == 39) {
        moveSnake(true, false, false, false);
    }
    //left
    else if (event == 37) {
        moveSnake(false, true, false, false);
    }
    //up
    else if (event == 38) {
        moveSnake(false, false, true, false);
    }
    //down
    else if (event == 40) {
        moveSnake(false, false, false, true);
    }
}, 20);
