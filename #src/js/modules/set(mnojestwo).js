function distinct(arr) {
  let res = new Set(arr);
  return res.size;
}
console.log(distinct([2,4,5,3,4, 8, 2, 8, 9]));