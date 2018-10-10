const   inquirer = require('inquirer'),
        ContactController = require('./ContactController');

module.exports = class MenuController {
    constructor() {
        this.mainMenuQuestions = [
            {
                type: "list",
                name: "mainMenuChoice",
                message: "Please choose an option from below: ",
                choices: [
                    "Add new contact",
                    "Current date and time",
                    "Exit"
                ]
            }
        ]
        this.book = new ContactController();
    };

    main() {
        console.log("Welcome to AddressBloc!");
        inquirer.prompt(this.mainMenuQuestions).then((response) => {
            switch(response.mainMenuChoice) {
                case "Add new contact":
                    this.addContact();
                    break;
                case "Current date and time":
                    this.getDate();
                    break;
                case "Exit":
                    this.exit();
                default:
                    console.log("Invalid input");
                    this.main();
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }

    getDate() {
        this.clear();
        const date = new Date();
        console.log(`The date and current time is: ${date.toLocaleString()}`);
        this.main();
    }

    remindMe() {
        return "Learning is a life-long pursuit";
    }

    addContact() {
        this.clear();
        inquirer.prompt(this.book.addContactQuestions).then((answers) => {
            this.book.addContact(answers.name, answers.phone, answers.email).then((contact) => {
                console.log("Contact added successfully!");
                this.main();
            }).catch((err) => {
                console.log(err);
                this.main();
            })
        });
    }

    exit() {
        console.log("Thanks for using AddressBloc!");
        process.exit();
    }

    clear() {
        console.log("\x1Bc");
    }
}
