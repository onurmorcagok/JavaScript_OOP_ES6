class Person {
    constructor(name, age) {

        this.name = name;
        this.age = age;
    }

    showInfos() {
        console.log("Name: " + this.name + " Age: " + this.age);
    }
}

class Employee extends Person {

    constructor(name, age, salary) {

        super(name, age);
        this.salary = salary;
    }

    showInfos() { //Overriding
        console.log("Name : " + this.name + " Age: " + this.age + " Salary: " + this.age);
    }

    toString() {
        console.log("toString method called");
    }

    raiseSalary(amount){ //Extra Method
        this.salary += amount;
    }
}

const emp = new Employee("Onur M.", 23, 5000);

// console.log(emp);
// console.log(toString);

// emp.showInfos();
// emp.toString();

emp.raiseSalary(5000);