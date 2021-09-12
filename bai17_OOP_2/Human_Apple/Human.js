class Human {
    constructor(name, weight,boolean) {
        this.name = name;
        this.weight1 = weight;
        this.gender = boolean;
    }
    getName(){
        return this.name;
    }
    getWeight(){
        return this.weight1;
    }
    getGender(){
        return this.gender;
    }
    setName(name){
        this.name = name;
    }
    setWeight(weight){
        this.weight1 = weight;
    }
    setGender(boolean){
        if (boolean === true){
            this.gender = "Male";
        }else
            this.gender = "Female";
    }
    say(text){
        console.log(text);
    }
    eat(Apple){
        if(Apple.status === true){
            this.weight1++;// can nang human tang
            Apple.decrease();
        }
    }
    checkAppleWeight(Apple){
        return Apple.weight;
    }
}
let Adam = new Human("Adam",80,"true");
let Eva = new Human("Eva",70,"false");


