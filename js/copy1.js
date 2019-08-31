let book = {title: "인사이드 자바스크립트", price: 18000}; // book이 메모리주소를 기억하고 있음.
// 1. book을 카피한후에  price를 바꾸면 book과 copyBook이 같이 바뀐다. 이유가 무엇인가?
// let copyBook = book; // shallow copy. 메모리주소가 동일하다.
// copyBook.price = 20000;

// 2. book을 카피하되 deep copy를 수행한 후에 price를 30000으로 바꾸고 출력하라. 두개의 값이 달라야 한다.
// 2-1 Object.assign() 사용하여 deep copy하기
// Object.assign(target, ...source)
const copyBook = Object.assign({}, book, {a:1}, {title: '인사이트 자바스크립트 aaa'}) // const는 메모리주소가 final. 값이 바뀔 수 없는게 아니다. copyBook = 1; 이건 안된다능
copyBook.price = 30000; //메모리주소가 가지고 있는 값이 바뀐거라 가능.

// 2-2 es6 spread 연산자를 사용하여 deep copy 하기

console.log(book);
console.log(copyBook);
