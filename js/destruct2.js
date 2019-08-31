// 객체 배열 할당 => 동일한 키값으로 해체 할당

//var {p, q} = {p: 42, q: 50};
var {o = 24, q, p} = {p: 42, q: 50, o: 100}; // 순서가 바껴도 상관없다. key값으로 할당되기 때문에.

console.log(o); // 100. 24는 default값
console.log(p); // 42
console.log(q); // 50