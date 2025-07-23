/* 1. 데이터 타입 */ 
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
let something; // undefined : 메모리는 있는데 그 값이 없는 것.
console.log(something, amIFat); 


/* 2. 배열 */ 
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
console.log(daysOfWeek[4]); // fri
daysOfWeek[4] = "today" // 업데이트 가능
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


/* 4. 함수 */ 
function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber); // plus();일 때 NaN(= Not a number. 숫자가 아님)
} // <- 이렇게 실행할 블록을 만들어서...
// console.log(firstNumber); // firstNumber 변수는 블록 밖에서 존재할 수 없으므로 에러남.

function divide(a, b) {
    console.log(a / b);
}

plus(8, 60); // 데이터를 넣고 실행해서 function으로 데이터 전달!  <- 이렇게 실행!
divide(98, 20); // 첫번째 변수, 두번째 변수에 각각 '순서'대로 argument 데이터 전달.

const player = {
    name : "nico",
    sayHello : function(otherPersonsName) {
        console.log("hello! " + otherPersonsName + " nice to meet you!");
    },
}; // 객체와 함수 혼종

player.sayHello("lynn");
player.sayHello("nico");