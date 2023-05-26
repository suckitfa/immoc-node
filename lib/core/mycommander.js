const mycommander = (program) => {
    program
    .command('create <project> [other...]')
    .alias('crt')
    .description('创建一个新的项目')
    .action((projectName,otherArgs) => {
        console.log('create', projectName, otherArgs)
    })
}

module.exports = mycommander