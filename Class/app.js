// Syntactic Sugar

// ES6+ Pre Using

// function Employee(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }

// Employee.prototype.showInfos = function () {
//     console.log("Name: " + this.name + " Age: " + this.age + " Salary: " + this.salary);
// }

// const employee = new Employee("Onur",23,5000);

// console.log(employee);



// ES6+ Class Using

class Employee { // Class Created

    constructor(name, age, salary) { // Constructor Created
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    showInfos() { // Function
        console.log("Name: " + this.name + " Age: " + this.age + " Salary: " + this.salary);

    }

}

const emp = new Employee("Michael Jordan",23,7000);

console.log(emp);