class Person { // Superclass, Baseclass

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showInfos() {
        console.log("Name: " + this.name + " Age: " + this.age);
    }
}

class Employee extends Person { // Subclass, DerivedClass, ChildClass
    constructor(name, age, salary) {
        // this.name = name;
        // this.age = age;
        super(name, age);
        this.salary = salary;
    }

    showInfos() { // Overriding
        console.log("Name:" + this.name + " Age:" + this.age + " Salary:" + this.salary);
    }

    toString() {
        console.log("toString method called");
    }

    raiseSalary(amount) { // Extra Method
        this.salary += amount;
    }
}

const emp = new Employee("Onur M.", 23, 5000);

emp.raiseSalary(2000);
emp.showInfos();

// console.log(emp);
// console.log(toString);

// emp.showInfos();
// emp.toString();

