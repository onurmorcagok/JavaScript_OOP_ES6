class Car { // SuperClass

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

class BMW extends Car { // SubClass

    constructor(model, color, kilometer, engine, state, sunroof, conditioning, gear) {

        super(model, color, kilometer, engine, state);

        this.sunroof = sunroof;
        this.conditioning = conditioning;
        this.gear = gear;
    }

    carInfos() { // Overriding Method
        console.log("Model:" + this.model + " Color:" + this.color + " Kilometer:" + this.kilometer + " Engine:" + this.engine + " State:" + this.state + " Sunroof:" + this.sunroof + " Conditioning:" + this.conditioning + " Gear:" + this.gear);
    }

    toString() {
        console.log("toString method called..");
    }

}

class Mercedes extends Car {

    constructor(model, color, kilometer, engine, state, sunroof, conditioning, gear) {

        super(model, color, kilometer, engine, state);

        this.sunroof = sunroof;
        this.conditioning = conditioning;
        this.gear = gear;
    }

    carInfos() { // Overriding Method
        console.log("Model:" + this.model + " Color:" + this.color + " Kilometer:" + this.kilometer + " Engine:" + this.engine + " State:" + this.state + " Sunroof:" + this.sunroof + " Conditioning:" + this.conditioning + " Gear:" + this.gear);
    }

    carIsRunning () {
        console.log("Car is ready and running.");
    }
}

class Volkswagen extends Car {

    constructor(model,color,kilometer,engine,state,sunroof,conditioning,gear) {

        super(model,color,kilometer,engine,state);
        
        this.sunroof = sunroof;
        this.conditioning = conditioning;
        this.gear = gear;
    }

    carInfos() { // Overriding Method
        console.log("Model:" + this.model + " Color:" + this.color + " Kilometer:" + this.kilometer + " Engine:" + this.engine + " State:" + this.state + " Sunroof:" + this.sunroof + " Conditioning:" + this.conditioning + " Gear:" + this.gear);
    }

    updateKilometer(km){
        this.kilometer += km;
    }
}

const car1 = new BMW(2020, "Black", "225.000", "2.0", "Zero Kilometer", "Yes", "Yes", "Automatic");

// car1.carInfos();

const car2 = new Mercedes(1996, "White", "160.000", "1.6", "Second Handle", "No", "Yes", "Manuel");

// car2.carInfos();
// car2.carIsRunning();

const car3 = new Volkswagen(2008, "Gray", 75, "1.4", "Second Handle", "Yes", "Yes", "Automatic");

car3.updateKilometer(25);

car3.carInfos();