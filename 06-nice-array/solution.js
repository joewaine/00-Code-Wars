function isNice(arr){
if (arr.length === 0) return false;
  return arr.every(function(each, i, arr){
  return (arr.includes(each + 1) || arr.includes(each - 1))
})
}
