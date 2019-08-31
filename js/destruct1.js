// 배열 destruct assignment => 순서대로 할당
var a, b, rest;
[a, b] = [10];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log('-------------');
console.log(a);
console.log(b);
console.log(rest);
// expected output: [30,40,50]