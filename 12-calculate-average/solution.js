function find_average(array) {
  let r = array.reduce((x, y) => { return x + y; });
  return r/array.length
}
