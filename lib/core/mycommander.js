const action  = require('./action')
const mycommander = (program) => {
    program
    .command('create <project> [other...]')
    .alias('crt')
    .description('创建一个新的项目')
    .action(action)
}

module.exports = mycommander