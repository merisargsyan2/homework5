const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;
const rand = function (num) {return Math.floor(Math.random()*num)+1;};

const background = new Image();
background.src = 'http://rifting.ru/wp-content/uploads/AmbientSpace-444x250.jpg?fbclid=IwAR3GbnqWh7G5ASiee_KgsENBkg23rK9vKTObtu6rwRGgh-tmQGQ-xf-TAFY';

const  goodGuyImg = new Image();
goodGuyImg.src = 'http://icons.iconarchive.com/icons/martin-berube/people/256/astronaut-icon.png';

const badGuyImg = new Image();
badGuyImg.src = 'http://clipart-library.com/img/1603199.png';

const gameData = {
    hero: {
        x: 0,
        y: canvas.height -50,
        xDelta: 0,
        yDelta: 0,
        width: 50,
        height: 50,
        image: goodGuyImg,
        draw: function() { context.drawImage (this.image, this.x, this.y , this.width, this.height) },
        update: function() { 
            this.x+=this.xDelta ;
            this.y+=this.yDelta; 
            if (this.x === gameData.badGuys[0].x - this.width || this.x === gameData.badGuys[1].x - this.width || this.x === gameData.badGuys[2].x - this.width ){
                alert('Game Over')
            }
        }
    },
    badGuys: [
        {
            x: rand(canvas.width),
            y: rand (canvas.height),
            xDelta: 2,
            yDelta: 2,
            width: 20,
            height: 20,
            image: badGuyImg,
            draw: function() { context.drawImage (this.image, this.x, this.y , this.width, this.height) },
            update: function() { 
                this.x+=this.xDelta;
                this.y+=this.yDelta;
                if (this.x >= canvas.width - this.height){
                    this.xDelta = -2;
                }
                if (this.x <=0){
                    this .xDelta = 2;
                }
                if (this.y >=canvas.width - this.height){
                    this.yDelta = -2 ;
                }
                if (this.y <0){
                    this.yDelta = 2;
                }
                 }
        },
         {
            x: rand(canvas.width),
            y: rand (canvas.height),
            xDelta: 2,
            yDelta: 2,
            width: 20,
            height: 20,
            image: badGuyImg,
            draw: function() { context.drawImage (this.image, this.x, this.y , this.width, this.height) },
            update: function() { 
                this.x+=this.xDelta;
                this.y+=this.yDelta;
                if (this.x >= canvas.width - this.height){
                    this.xDelta = -2;
                }
                if (this.x <=0){
                    this .xDelta = 2;
                }
                if (this.y >=canvas.width - this.height){
                    this.yDelta = -2 ;
                }
                if (this.y <0){
                    this.yDelta = 2;
                }
                 }
        },
         {
            x: rand(canvas.width),
            y: rand (canvas.height),
            xDelta: 2,
            yDelta: 2,
            width: 20,
            height: 20,
            image: badGuyImg,
            draw: function() { context.drawImage (this.image, this.x, this.y , this.width, this.height) },
            update: function() { 
                this.x+=this.xDelta;
                this.y+=this.yDelta;
                if (this.x >= canvas.width - this.height){
                    this.xDelta = -2;
                }
                if (this.x <=0){
                    this .xDelta = 2;
                }
                if (this.y >=canvas.width - this.height){
                    this.yDelta = -2 ;
                }
                if (this.y <0){
                    this.yDelta = 2;
                }
                 }
        },
        
    ]
};


const leftKey = 37;
const upKey = 38;
const rightKey = 39;
const downKey = 40;
document.addEventListener('keydown', function(event) {
    if(event.keyCode === rightKey) {
        gameData.hero.xDelta = 1;
    }
}, false);

document.addEventListener('keydown', function(event) {
    if(event.keyCode === leftKey) {
        gameData.hero.xDelta = -1;
    }
}, false);

document.addEventListener('keydown', function(event) {
    if(event.keyCode === upKey) {
        gameData.hero.yDelta = -1;
    }
}, false);

document.addEventListener('keydown', function(event) {
    if(event.keyCode === downKey) {
        gameData.hero.yDelta = 1;
    }
}, false);

document.addEventListener('keyup', function(event) {
        gameData.hero.yDelta = 0;
}, false);

document.addEventListener('keyup', function(event) {
        gameData.hero.xDelta = 0;
}, false);


const draw = function () {
    gameData.hero.draw();
    gameData.badGuys[0].draw();
    gameData.badGuys[1].draw();
    gameData.badGuys[2].draw();
};

const update = function() {
    gameData.hero.update();
    gameData.badGuys[0].update();
    gameData.badGuys[1].update();
    gameData.badGuys[2].update();

};

const loop = function () {
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    draw();
    update()
requestAnimationFrame(loop);
};

loop();



