function cubeOdd(arr){

let sum = 0;

for(i=0;i< arr.length;i++){
   if (typeof arr[i] !== "number"){ return }
   if (arr[i] % 2){
       sum =  sum + arr[i] * arr[i] * arr[i];
   }
}

return sum

}

