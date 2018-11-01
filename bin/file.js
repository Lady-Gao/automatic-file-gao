var fs = require('fs');
var path = require('path');
var mock = require('./mock');


/**
 * 新建文件的操作
 */
exports.a = function () {
    console.log(1)
}
/**
 * 编写文件夹内部的文件
 * -home
 * --src
 * ---home.vue
 * --style
 * ---index.css
 * --index.js
 * @param String*} name 文件地址
 */
exports.b = function (name) {
    var fileName = path.basename(name) //文件夹名称

    fs.writeFile(name + "/index.js", mock.indexJs(fileName), function () {})
    fs.mkdir(name + "/src",function(){
        fs.writeFile(name + "/src/" + fileName + ".vue", mock.tmepvue(), function () {})
    })
    fs.mkdir(name + "/style",function(){
        fs.writeFile(name + "/style/" + fileName + ".css", mock.indexCss(), function () {})
    })

}