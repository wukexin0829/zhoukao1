#!/usr/bin/env node
const fs=require("fs")
const path =require("path")
// \Users\wkx\Desktop\zhoukao1\-dist
const url=path.join(process.cwd(),process.argv[2].slice(1))
console.log(url)
// process.cwd 获取到的是小黑板的路径 \Users\wkx\Desktop\zhoukao1
//判断路径是否存在
if(fs.existsSync(url)){
    // 判断是文件还是文件夹
    if(fs.statSync(url).isDirectory()){
        // 文件夹 读取文件夹 [ 'css', 'index.html', 'index.js' ]
        let dirlist=fs.readdirSync(url)
         let targetList= dirlist.map(item=>{
           exname=path.extname(item) //.html .js
        //   console.log(path.join(process.argv[2].slice(1),item))    dist\css dist\index.html dist\index.js
          let size=fs.statSync(path.join(process.argv[2].slice(1),item)).size
           return `${item}-${ exname&&exname.slice(1)}-${size?'size':''}`
          })
          console.log(targetList) //[ 'css--', 'index.html-html-size', 'index.js-js-size' ]
        
    }else{
        console.log(process.argv[2].slice(1))
    }
}else{
    console.log("此目录不存在")
}
