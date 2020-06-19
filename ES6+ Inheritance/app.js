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

    showInfos() {
        console.log("Name : " + this.name + " Age: " + this.age + " Salary: " + this.age);
    }
}

const emp = new Person("Onur M.", 23, 5000);
console.log(emp);