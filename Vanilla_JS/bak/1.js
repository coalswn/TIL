/* 데이터 타입과 변수 선언 */ 
const a = 5;
const b = 2; // 기본 const
let myName = "nico"; // 업데이트 필요할 때만 let

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "nicolas"; // let 없이 업데이트 가능 

console.log("your new name is " + myName);  // 이전 값에 영향 안감

0 // off = false = 파이썬 False
1 // on = true = 파이썬 True
const amIFat = null; // null : 값이 없음을 알려주기 위해 사용 = 파이썬 None
let something; // undefined : 메모리는 있는데 값이 주어졌는데 그 값이 없는 것.

console.log(something, amIFat); 