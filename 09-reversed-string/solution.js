function solution(str){

let emptyarray = [];

var splitstring = str.split('');
for(i = splitstring.length - 1; i >= 0; i--){
  emptyarray.push(splitstring[i]);
}
return emptyarray.join('');

}

function solution(str){
return str.split('').reverse().join('');

}
