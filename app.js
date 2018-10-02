const   inquirer = require('inquirer')
        MenuController = require('./controllers/MenuController'),
        menu = new MenuController();

menu.clear();
menu.main();
