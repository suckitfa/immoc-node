const inquirer = require('inquirer')
const config = require('../../config')
const action = (project,args) => {
    inquirer
    .prompt([
        {   
            name:'framework',
            type: 'list',
            choices: config.framework,
            message:'请选所使用的框架：'
        }
    ])
    .then(answers => {
        console.log(answers)
    })
    // log project args
    console.log('project ,args = ', project, args)
}

module.exports = action