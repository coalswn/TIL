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

