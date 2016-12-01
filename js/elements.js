(function (window, game) {
    'use strict';
    
    game.elements = {};

    game.elements.drawCircle = function(x, y, radius, bg) {
        game.base.context.clearRect(0, 0, game.base.element.width, game.base.element.height);
        game.base.context.beginPath();
        game.base.context.arc(x, y, radius, 0, Math.PI * 2, false);
        game.base.context.fillStyle = bg;
        game.base.context.fill();
        game.base.context.closePath();
    }

})(window, window.game = window.game || {});