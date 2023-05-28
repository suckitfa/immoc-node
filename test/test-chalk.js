const chalk = require('chalk');

const blueText = chalk.blue('Hello world!');
console.log(blueText);
console.log(chalk.blue.bgRed.bold('Hello world!'));
console.log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));