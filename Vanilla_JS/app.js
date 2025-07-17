const player = {
    name: "nico", 
    points: 10,
    fat: true,
};
console.log(player.name);
// = console.log(player["name"]);
console.log(player);
player.fat = false; // 내부요소는 업데이트 가능
player.lastName = "potato"; // 프로퍼티 추가 가능
console.log(player);
player.points = player.points + 15;
console.log(player.points);