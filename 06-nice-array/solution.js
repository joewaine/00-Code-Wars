const isNice = (arr) => {

if(arr.length === 0){

return false

}else{

let an = [];

arr.forEach(function(x,i){
 let plus =  arr[i] + 1, minus = arr[i] - 1;
   arr.indexOf(plus) === -1 || arr.indexOf(minus) === -1 ? an.push(1) : an.push(0)
    i++
 })

return an.includes(0) ? false : true

}

}
