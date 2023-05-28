const inquirer = require('inquirer')
const config = require('../../config')
const downloadFn = require('./download')
const action = (project,args) => {
    // console.log('project ,args = ', project, args)
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
        const {framework} = answers
        switch(framework){
            case 'vue':
                break;
            case 'react':
                break;
            case 'egg':
                downloadFn(config.templateRepo[framework],project)
                break;
            default: 
                break;
        }
    })
    // log project args
}

module.exports = action