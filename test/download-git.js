const download = require('download-git-repo')
download('direct:git@github.com:suckitfa/template-node-egg.git', './egg-template', {clone:true},function (err) {
    console.log('err = ',err)
    console.log(err ? 'Error' : 'Success')
})