const download = require('download-git-repo')
download('direct:git@gitee.com:beiyaoyaoyao/egg-template.git', './egg-template', {clone:true},function (err) {
    console.log('err = ',err)
    console.log(err ? 'Error' : 'Success')
})