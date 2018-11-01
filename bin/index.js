#!/usr/bin/env node

var chokidar = require('chokidar');
var fileDo = require('./file.js');
var fs = require('fs');
var path = require('path');
var dirname, outPut;
var locPath = process.cwd()


/**如果没有自定义config.json
 * 初始化创建config.json
 */
!fs.existsSync(process.cwd() + "/config.json") && fs.writeFileSync(process.cwd() + "/config.json", JSON.stringify({
        "dirname": "view",
        "outPut": "dist"
    }), function () {})


var config = process.cwd() + "/config.json"

/**
 * 读取config.json文件夹
 */
fs.readFile(config, function (err, res) {
    dirname = (locPath + "/" + JSON.parse(res).dirname).replace('/', "\\") //权限文件夹路径
    outPut = (locPath + "/" + JSON.parse(res).outPut).replace('/', "\\") //打包文件夹
    /**
     * 创建config里的权限文件夹
     */
    fs.mkdir(dirname, function () {
        watch(dirname)
    })
})




/**
 * 
 * @param {String} dirname 文件监听
 */
function watch(dirname) {
    var watcher = chokidar.watch(dirname, {
        ignored: /(^|[\/\\])\../,
        persistent: true
    });


    watcher
        .on('add', function (path) { //文件的添加 监听

            // fileDo.a()

        })
        .on('addDir', function (val) { //文件夹的添加 监听

            //新建文件夹的上层必须为权限文件夹名称

            path.dirname(val) == dirname && fileDo.b(val)


        })
}