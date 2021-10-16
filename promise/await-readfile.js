const fs = require('fs');

// fs.readFile("input.txt",'utf-8',(err,data)=>{
//     if(err){
//         console.error("error",err);
//     }else{
//         console.log("success",data);
//     }
// })

function readFilePromise(){
    return new Promise((resolve,reject) => {
        fs.readFile("input.txt",'utf-8',(err,data) => {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}
// readFilePromise()
//   .then((data) => {
//     console.log("成功", data);
//   })
//   .catch((err) => {
//     console.error("失敗", err);
//   });


  let p = new Promise((resolve,reject) => {
    fs.readFile("input.txt",'utf-8',(err,data) => {
        if(err){
            reject(err)
        }else{
            resolve(data)
        }
    })
});
  (async () => {
    try{
        let data = await p;
        console.log(data);
    }catch(e){
        console.log("error", e);
    }
  })();