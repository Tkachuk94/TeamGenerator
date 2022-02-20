const employee = require('./employee');

class engineer extends employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }

    getGithub () {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

const Engineer1 = new engineer('Trent Tkachuk', 1, 'Tkachuk753@gmail.com', 'Tkachuk94')
console.log(Engineer1)

module.exports = engineer;


