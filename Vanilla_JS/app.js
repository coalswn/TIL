// const age = prompt("How old are you?"); 

// console.log(typeof "15", typeof parseInt("15"));  // string number
// default가 string, parseInt는 string을 number로 변환시켜줌

// console.log(parseInt(age)); // 숫자가 아닌걸 입력했을 때 NaN이 나와서 알수있음

const age = parseInt(prompt("How old are you?")); 

// console.log(isNaN(age)); // 뭐가 Nat a number인지 boolean으로 반환해줌.

// if(condition){
//     /// condition === true 
// } else {
//     // condition === false
// }

true && true === true
false && true === false
true && false === false
false && false === false

true || true === true
false || true === true
true || false === true
false || false === false


if (isNaN(age) || age < 0){ // true
    /// condition === true
    console.log("Please write a real positive number");  // 정수 입력
} else if (age < 18) { // false
    // condition === false
    console.log("You are too young."); 
} else if (age >= 18 && age <= 50) { 
    console.log("You can drink."); 
} else if (age > 50 && age <= 80){ 
    console.log("You should exercise."); 
} else if (age > 80) {
    console.log("You can do whatever you want.");
}