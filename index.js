const employeesJSON = require('./employees.json');
const managersJSON = require('./managers.json');

// Code Here
class Employee {

    constructor(name, position, yearJoined, salary) {
        this.name = name;
        this.position = position;
        this.yearJoined = yearJoined;
        this.salary = salary;
    }

    //idBadge = (id) => {(this.position, this.name) = id};  (((error)))
}

//const emp1 = new Employee(employeesJSON); ((to add to params of constructor))
const emp2 = employeesJSON.map((emp) => ({ position: emp.position, name: emp.name}));
//but line 18 made it possible to log the position and name
  console.log(emp2);
// console.log(emp1.idBadge);




class Manager extends Employee {

    constructor(bonusPercentage) {
        this.bonusPercentage = bonusPercentage;
    
        super("bonusPercentage");
    }

    salaryIncrease() {
        return (this.salary + 1);
    }


}

const manager1 = new Manager(5);
console.log(manager1.salaryIncrease(increaseAmount));