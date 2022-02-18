const Employee = require('./employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email)
        this.officeNumber = officeNumber
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;


const manager = new Manager('Trent', 1, 'tkachuk753@gmail.com', 2);
console.log(manager)