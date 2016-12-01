(function (window, game) {
    'use strict';

    var body = document.getElementsByTagName('body')[0];

    var canvas = document.createElement('canvas');
    canvas.id = 'game';
    
    game.base = {
        element: canvas,
        context: canvas.getContext('2d')
    }

    body.appendChild(canvas);

    function resize() {
        canvas.width = body.offsetWidth;
        canvas.height = body.offsetHeight;
    }

    resize();

    window.addEventListener('resize', resize);

})(window, window.game = window.game || {});