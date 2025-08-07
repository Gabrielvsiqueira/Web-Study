let tea = ['Black tea', 'Iced tea', 'chai', 'camomila tea'];
let selectTea = [];

for (let i = 0; i < tea.length; i++) {
  if (tea[i] === 'chai'){
    break;
  }
  selectTea.push(tea[i]);
}
//console.log(tea)
//console.log(selectTea)

let cities = ["New York","London", "Paris", "Berlin"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if(cities[i] === "New York"){
    continue;
  }
  visitedCities.push(cities[i]);
}
//console.log(cities);
//console.log(visitedCities);

let numbers = [1,2,3,4,5];
let storeNumbers = [];

for (const num of numbers) {
  if(num === 4) {
    continue;
  }
  storeNumbers.push(num);
}
console.log(numbers);
console.log(storeNumbers);