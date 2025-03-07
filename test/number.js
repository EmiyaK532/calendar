// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

// console.log(Number(11111111111111111111111111111111111111));
// console.log(BigInt(11111111111111111111111111111111111111));

//sort的比较要加比较函数，不然会按照字符串排序
console.log(
  [3, 15, 8, 29, 102, 22].sort((a, b) => {
    return b - a;
  })
);

Number.prototype.add = function (num) {
  return this + num;
};

Number.prototype.minus = function (num) {
  return this - num;
};

console.log((1).add(2).minus(1));

console.log([
  ...new Set([
    ...[1, 3, 3, 5, 7, 9].filter((item) => {
      return new Set([1, 2, 3, 4, 5, 6]).has(item);
    }),
  ]),
]);
