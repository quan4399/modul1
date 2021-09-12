class SwitchButton {
    status;

    constructor(status) {
        this.status = status;

    }
    connectToLamp(lamp1){
        this.lamp = lamp1;
    }

    switchOff(){
        this.lamp.turnOff();
    }

    switchOn(){
        this.lamp.turnOn();
    }
}

let button1 = new SwitchButton(false);
