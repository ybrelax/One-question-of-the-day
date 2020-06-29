const arrLike = {
  length: 4,
  0: 0,
  1:1,
  '-1': 2,
  3:3,
  4:4
}

console.log(Array.from(arrLike));
console.log(Array.prototype.slice.call(arrLike));