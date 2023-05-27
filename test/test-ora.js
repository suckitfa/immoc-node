const ora = require('ora');

const spinner = ora('Loading unicorns').start();

setTimeout(() => {
	// console.log('11111')
	// spinner.succeed('Loading unicorns succeed');
	// spinner.fail('Loading unicorns failed');
	// spinner.info('Loading unicorns info');
}, 2000);