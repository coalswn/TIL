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



