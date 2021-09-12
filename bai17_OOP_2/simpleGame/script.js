function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function(){
        return '<img alt="khong co anh" width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += this.speed;
        console.log('ok: ' + this.left);
    }

    this.moveBottom = function() {
        this.top += this.speed;
        console.log('ok: ' + this.top);
    }

    this.moveLeft = function() {
        this.left -= this.speed;
        console.log('ok: ' + this.left);
    }

    this.moveTop = function() {
        this.top -= this.speed;
        console.log('ok: ' + this.top);
    }

}
let speed = +prompt("input speed");
let hero = new Hero('duck.png', 20, 30, 200);

function start(){
    if (hero.top === 0 && hero.left < window.innerWidth - hero.size) {
        hero.moveRight();
    } else if (hero.top < window.innerHeight - hero.size && hero.left >= window.innerWidth - hero.size) {
        hero.moveBottom();
    } else if (hero.left > 0) {
        hero.moveLeft()
    } else if (hero.top > 0) {
        hero.moveTop()
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 100)
}

start();