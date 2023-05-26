#! /usr/bin/env node
const { program } = require('commander')
// console.log('my cli')
// 从process.argv中获取用户输入的参数
// console.log(process.argv)
program.version('0.0.1')
// 让我们的命令行工具支持两个参数
program.parse(process.argv)