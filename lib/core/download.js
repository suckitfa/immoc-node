const chalk = require('chalk');
const download = require('download-git-repo');
const ora = require('ora');

const downloadFn = function(url,project) {
    // 初始化 ora
    const spinner = ora().start();
    spinner.text = '正在下载模板代码...'
    download('direct:'+url,project,{clone:true},function(err){
        if(err){
            spinner.fail(chalk.red.bold('下载失败'))
            console.log(err)
        } else{
            spinner.succeed('下载成功')
            console.log(chalk.blue.bold("Done!"),chalk.bold("You can run:"))
            console.log('cd '+project)
            console.log('npm install')
            console.log('npm run dev')
        }
    })
}

module.exports = downloadFn