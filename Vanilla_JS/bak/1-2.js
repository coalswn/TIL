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

console.log(player, console); // console 도 function으로 이루어진 객체!


/* 4. 함수 */ 
function plus01() {
    console.log(2 + 2); 
} 
plus01(); // 꼭 실행 필요!

alert("lalalalala"); // alert 이란 함수 안에 값을 넣는 것!

function plus(firstNumber, secondNumber) { 
    // 다용도로 같은 코드를 활용하기 위해 밖에서 데이터를 넣을 수 있게 하는 게 좋음
    console.log(firstNumber + secondNumber); // plus();일 때 NaN(= Not a number. 숫자가 아님)
} // <- 이렇게 실행할 블록을 만들어서...
// console.log(firstNumber); // firstNumber 변수는 블록 밖에서 존재 할 수 없으므로 에러남.
function divide(a, b) {
    console.log(a / b);
}

plus(8, 60); // 데이터를 넣고 실행해서 function으로 데이터 전달!  <- 이렇게 실행!
divide(98, 20); // 첫번째 변수, 두번째 변수에 각각 '순서'대로 argument 데이터 전달.

const player = {
    name:"nico",
    sayHello: function(otherPersonsName) {
        console.log("hello! " + otherPersonsName + " nice to meet you!");
    },
}; // 객체와 함수 혼종

player.sayHello("lynn"); // console.log(); 와 같은 구조
player.sayHello("nico");

function minusFive(num) {
    console.log(num - 5);
}
minusFive(5, 10, 15, 12, 13, 18); // 많은 데이터를 넣어도 5만 적용되어 0이 나옴.


/* 5. Returns */ 
const age = 96;
// function 은 일을 수행하고 그 결과를 return해서 알려주는 것
function calculateKrAge(ageOfForeigner) { 
   ageOfForeigner + 2; 
   return "hello"; // return은 함수가 함수 밖과 소통하는 방법. 함수 안에서 return을 하면,  
}
const krAge = calculateKrAge(age); // 함수를 실행시 calculateKrAge의 반환값이 됨
console.log(krAge); // return안하면 undefined
// calculateKrAge의 반환값인 hello(string)가 반환됨

const calculator = {
    plus : function (a, b) {
        console.log("Hello!");
        return a + b;  // 값은 돌아오는 거야!
        console.log("bye bye!"); // 작동 X. return 하면 함수는 작동을 멈추고 결과값을 return하고 종료됨.
    },
    minus: function (a, b) {
        return a - b;
    },
    times: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
    power: function (a, b) {
        return a ** b;
    },
};
const plusResult = calculator.plus(2, 3); // 변수 자체가 반환값. 함수 외부에서 값을 얻고 활용 가능 
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);

console.log(plusResult); // 오오...console에 변수만 쳐도 값 나옴

