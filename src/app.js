var canvas = document.getElementById('master');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
    c.fillRect(200,200,150,300);
    c.fillRect(100,250,150,300);
    c.fillRect(600,400,100,100);