const employee = require('./employee');

class manager extends employee {
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

const manager1 = new manager('Trent', 1, 'tkachuk753@gmail.com', 2);
console.log(manager1)

module.exports = manager;