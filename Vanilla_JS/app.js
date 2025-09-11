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

if(isNaN(age)){ // true
    /// condition === true
    console.log("Please write a number"); 
} else { // false
    // condition === false
    console.log("Thank you for writing your age."); 
}