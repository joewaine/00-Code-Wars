function insertDash(num) {
  var arr2 = String(num).split('');
    for(i = 0;i< arr2.length;i++){
    if(arr2[i] % 2 && parseInt(arr2[i + 1]) % 2){
      arr2[i] = arr2[i] + '-';
    }
  }
  return arr2.join('');

}


// function insertDash(num) {
//   let arr = num.toString().split('');
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 && arr[i - 1] % 2) arr.splice(i, 0, '-');
//   }
//   return arr.join('');
// }
