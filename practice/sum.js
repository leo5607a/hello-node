 function sum(param){
    let num = 0;
    for (let i = 1; i <= param; i++){
        num+=i;
    }
    return num;
 }

console.log(sum(3));
console.log(sum(6));
console.log(sum(10));