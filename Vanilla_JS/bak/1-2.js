/* 1. 데이터 타입과 변수 선언 */ 
const a = 5;
const b = 2; // 기본 const
let myName = "nico"; // 업데이트 필요할 때만 let
console.log(a + b);
console.log("hello " + myName);

myName = "nicolas"; // let 없이 업데이트 가능 
console.log("your new name is " + myName);  // 이전 값에 영향 안감

0 // off = false = 파이썬 False
1 // on = true = 파이썬 True
const amIFat = null; // null : 값이 없음을 알려주기 위해 사용 = 파이썬 None
let something; // undefined : 메모리는 있는데 값이 주어졌는데 그 값이 없는 것.
console.log(something, amIFat); 


/* 2. 배열 */ 
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
// Get Item from Array
console.log(daysOfWeek[4]); // fri
console.log(daysOfWeek); // 6
// Add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);  // 7


/* 3. 객체 */ 
const player = {
    name: "nico", 
    points: 10,
    fat: true,
};
console.log(player.name); // = console.log(player["name"]);
player.fat = false; // const로 선언되었어도 내부요소는 업데이트 가능
player.lastName = "potato"; // 프로퍼티 추가 가능
player.points = player.points + 15;
