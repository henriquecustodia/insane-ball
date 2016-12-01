(function(window, game) {
    'use strict';

    var width = game.base.element.width;
    var height = game.base.element.height;

    var x = width / 2;
    var y = height * 0.09;
    var moveX = 3;
    var moveY = -3;
    var radius = 10;

    function drawCircle() {
        game.elements.drawCircle(x, y, radius, 'red');

        x += moveX;
        y += moveY;

        if (y + moveY > height - radius ||
            y + moveY < radius) {
            moveY = -moveY;
        }

        if (x + moveX > width - radius ||
            x + moveX < radius) {
            moveX = -moveX;
        }
    }

    setInterval(drawCircle, 20);

})(window, window.game = window.game || {});