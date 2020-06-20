class Car {

    constructor(model, color, kilometer, engine, state) {

        this.model = model;
        this.color = color;
        this.kilometer = kilometer;
        this.engine = engine;
        this.state = state;
    }

    carInfos() {
        console.log("Model:" + this.model + " Color:" + this.color + " Kilometer:" + this.kilometer + " Engine:" + this.engine + " State:" + this.state);
    }
}

class BMW extends Car {

    constructor(model, color, kilometer, engine, state, sunroof, conditioning, gear) {

        super(model, color, kilometer, engine, state);
        
        this.sunroof = sunroof;
        this.conditioning = conditioning;
        this.gear = gear;
    }

    carInfos() {
        console.log("Model:" + this.model + " Color:" + this.color + " Kilometer:" + this.kilometer + " Engine:" + this.engine + " State:" + this.state);
    }

}

const car = new BMW (2020, "Black", "225.000", "2.0", "Zero Kilometer");

console.log(car);