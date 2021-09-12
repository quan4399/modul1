class Cat {
    constructor(_name, _weight, _speed) {
        this.name = _name;
        this.weight = _weight;
        this.maxspeed = _speed;
    }
    sound(text){
        console.log(text);
    }
    catch(rat){
        //in ra da bat duoc chuot
        if (this.maxspeed >= rat.speed)
        console.log("meo" + this.name + "da bat duoc chuot" + rat.name);
    }
    eat(rat){
        console.log("meo " + this.name + " da an chuot " + rat.name );
        //chuyen trang thai chuot song tu true sang false
        rat.status = false;
        //tang khoi luong cua cat len
        this.weight += rat.weight;
    }
}
let Cat1 = new Cat("Cat 1",70,100);