var chalk = require("chalk");

var message = "Hello " + chalk.bgWhite.magenta.italic.inverse.underline("World");
console.log(message);