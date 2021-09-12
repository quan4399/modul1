class Rat {
    constructor(_name, _weight, _speed) {
        this.name = _name;
        this.weight = _weight;
        this.speed = _speed;
        this.status = true;
    }
    sound(text){
        console.log(text);
    }
}
//khoi tao doi tuong
let Rat1 = new Rat("chuot 1",63, 50);
let Rat2 = new Rat("chuot 2", 50,40);