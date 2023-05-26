const inquire = require('inquirer');
inquire.prompt([
    {
        type: 'input',
        name: 'name',
        message:'请输入你的名字：'
    }
]).then(answers => {
    console.log(answers);
});