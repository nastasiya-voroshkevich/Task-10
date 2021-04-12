class AirPlane {
  constructor(type, weight, fuelTank) {
    this.type = type;
    this.weight = weight;
    this.fuelTank = fuelTank;
    this.tank = 0;
  }
  getInfo() {
    console.log(
      `Модель самолета: ${this.type} .Вес самолета:${this.weight} кг.`
    );
  }
  addFuel(number) {
    this.tank += number;
    if (this.tank > this.fuelTank) {
      this.tank = this.fuelTank;
    }
  }

  setFullTank() {
    this.tank = this.fuelTank;
  }
  setEmptyTank() {
    this.tank = 0;
  }
  setPylotInfo(name, number) {
    this.name = name;
    this.numberPylot = number;
  }
  getPylotInfo() {
    console.log(
      `Вас обслуживает пилот ${this.name} его номер ${this.numberPylot}.`
    );
  }
  getCurrentWeight() {
    this.sum = this.weight + this.tank;
    console.log(`Текущий вес самолета ${this.sum} кг.`);
  }
}
let airplane = new AirPlane("Боинг 737-100", 40000, 1200);
airplane.getInfo();
airplane.setPylotInfo("Jon", 156);
airplane.getPylotInfo();
airplane.addFuel(600);
airplane.addFuel(800);
airplane.setEmptyTank();
airplane.getCurrentWeight();

let airplane1 = new AirPlane("Боинг 737-100", 40000, 1200);
airplane1.getInfo();
airplane1.setPylotInfo("Jon", 156);
airplane1.getPylotInfo();
airplane1.addFuel(100);
airplane1.addFuel(100);
airplane1.getCurrentWeight();

class PassengerPlane extends AirPlane {
  constructor(type, weight, fuelTank, passengersNumber) {
    super(type, weight, fuelTank);
    this.passengersNumber = passengersNumber;
  }
  getInfoNew() {
    console.log(
      `Модель самолета: ${this.type} .Число пассажиров самолета:${this.passengersNumber}.`
    );
  }
  getInfo() {
    this.getInfoNew();
  }
}
let passengerPlane = new PassengerPlane("Боинг 737-102", 4000, 1200, 100);
passengerPlane.getInfo();
passengerPlane.setPylotInfo("Dio", 158);
passengerPlane.getPylotInfo();

class Freighter extends AirPlane {
  constructor(type, weight, fuelTank, loadCapacity) {
    super(type, weight, fuelTank);
    this.loadCapacity = loadCapacity;
    this.load = 0;
  }
  addLoad(number) {
    this.load += number;
    if (this.load > this.loadCapacity) {
      this.load = this.loadCapacity;
    }
  }
  resetLoad() {
    this.load = 0;
  }
  getCurrentWeightNew() {
    this.sum = this.weight + this.tank + this.load;
    console.log(`Текущий вес самолета ${this.sum} кг.`);
  }
  getCurrentWeight() {
    this.getCurrentWeightNew();
  }
}

let freighter = new Freighter("Боинг 737-101", 40000, 1200, 1000);
freighter.getInfo();
freighter.addLoad(20);
freighter.addFuel(1400);
freighter.addLoad(500);
freighter.getCurrentWeight();
