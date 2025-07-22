function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber); // plus();일 때 NaN(= Not a number. 숫자가 아님)
}
// console.log(firstNumber); // firstNumber 변수는 블록 밖에서 존재할수없으므로 에러남.
function divide(a, b) {
    console.log(a / b);
}

plus(8, 60); // 데이터를 넣고 실행해서 function으로 데이터 전달!
divide(98, 20); // 첫번째 변수, 두번째 변수에 각각 '순서'대로 argument 데이터 전달.

const player = {
    name:"nico",
    sayHello: function(otherPersonsName) {
        console.log("hello! " + otherPersonsName + " nice to meet you!");
    },
};

player.sayHello("lynn");
player.sayHello("nico");