function filter_list(l) {
return l.filter(function(x){
  return Number.isInteger(x)
});
}
