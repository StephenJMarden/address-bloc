const inquirer = require('inquirer');

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
        this.contacts = [];
    };

    main() {
        console.log("Welcome to AddressBloc!");
        inquirer.prompt(this.mainMenuQuestions).then((response) => {
            switch(response.mainMenuChoice) {
                case "Add new contact":
                    this.addContact();
                    break;
                case "Current date":
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
        console.log("addContact called");
        this.main();
    }

    getContactCount() {
        return this.contacts.length;
    }

    exit() {
        console.log("Thanks for using AddressBloc!");
        process.exit();
    }

    clear() {
        console.log("\x1Bc");
    }
}
