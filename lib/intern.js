const employee = require('./employee');


class intern extends employee {
    constructor (name, id, email, school) {
        super (name, id, email)

        this.school =  school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern"
    }
}


const intern1 = new intern('Trent Tkachuk', 1, "tkachuk753@gmail.com", 'UCSD Extension')
console.log(intern1)

module.exports = intern;