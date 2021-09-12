class ElectricLamp {
    status;
    constructor(status) {
        this.status = status;
    }
    turnOn(){
        this.status = true;
    }
    turnOff(){
        this.status = false;
    }
}
let lamp1 = new ElectricLamp(false);
