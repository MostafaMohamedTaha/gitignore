// console.log(__dirname)
// setInterval(() => {
//     console.log('hello world')
// }, 1000);
// const mo='mo'
// const me='me'

// const sayHi=(name)=>{
//     console.log(`hello there ${name}`)
// }

// const usersNames=require('./indexTest')
// const sayHi=require('./indexFunction')
// console.log(usersNames)
// const userFullData=require('./indexModule')
// const sumValue=require('./mind')
// console.log(userFullData)
// sayHi(usersNames.mo)
// sayHi(usersNames.me)
/*======================================*/
// const os=require('os')
// const userInfo=os.userInfo()
// console.log(userInfo)
// console.log(`the system uptime is  ${os.uptime()} seconds`)
// const currentOs={
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem(),
// }
// console.log(currentOs)
/*======================================*/
// const path=require('path')
// console.log(path.sep)
// const filePath=path.join('/test/', 'subtest' ,'txt.txt')
// console.log(filePath)
// const baseName=path.basename(filePath)
// console.log(baseName)
// const absolutPath=path.resolve(__dirname,'test','subtest','txt.txt')
// console.log(absolutPath)
/*======================================*/
// const {readFileSync, writeFileSync} =require('fs')
// const firstText=readFileSync('./test/subtest/first.txt','utf8')
// const secondText=readFileSync('./test/subtest/second.txt','utf8')
// writeFileSync(
//     './test/resultSync.txt',
//     `Here Is The Result : ${firstText} , ${secondText}` , {flag : 'a'}
// )
/*======================================*/
// Dude Code But Ok 
// const {readFile,writeFile} =require('fs')
// readFile('./test/subtest/first.txt',(err,result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(result) 
//     // here we get buffer
//     const first=result
//     readFile('./test/subtest/second.txt','utf8',(err,result)=>{
//         if(err){
//             console.log(err)
//             return
//         }
//         const second=result
//         writeFile('./test/resultSync.txt',
//         `Here Is The Result : ${first}, ${second}`,
//         (err,result)=>{
//             if(err){
//                 console.log(err)
//                 return
//             }
//             console.log(result)
        
//         }
//         )
//     })
// })
// Here We Return Undefined Console But Get Txt Result
/*======================================*/
// const {readFileSync, writeFileSync} =require('fs')
// console.log('start')
// const first=readFileSync('./test/subtest/first.txt','utf8')
// const second=readFileSync('./test/subtest/second.txt','utf8')
// writeFileSync(
//     './test/resultSync.txt',
//     `Here Is The Result : ${first}, ${second}`,{flag:'a'}
// )
// console.log('Done With This Task');
// console.log('Starting The Next One');
/*======================================*/
// //port 5000 localhost:5000
// const http =require ('http')
// const server =http.createServer((request,response)=>{
//     if(request.url==='/'){
//         response.end('Welcome To Our Home Page')
//     }
//     if(request.url==='/about'){
//         response.end('here is our short history')
//     }
//     response.end(`
//     <h1>Oops!</h1>
//     <p>We Can'T Seem To Find The Page You Are Looking For </p>
//     <a href="/">Back Home</a>
//     `)
//     // response.write()
//     // response.end()
// })
// server.listen(5000)
/*======================================*/
const _ =require('lodash')
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)