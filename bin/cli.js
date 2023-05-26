#! /usr/bin/env node
const { program } = require('commander')
const myhelp = require('../lib/core/help')
const mycommander = require('../lib/core/mycommander')
myhelp(program)
mycommander(program)
// console.log('my cli')
// 从process.argv中获取用户输入的参数
// console.log(process.argv)
program.version('0.0.1')
// 创建create命令
program
    .command('create <project> [other...]')
    .alias('crt')
    .description('创建一个新的项目')
    .action((projectName,otherArgs) => {
        console.log('create', projectName, otherArgs)
    })
// 让我们的命令行工具支持两个参数
program.parse(process.argv)