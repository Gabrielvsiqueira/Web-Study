let sum = 0;
let i = 1;

while (i <= 5) { 
  sum+= i; // sum = sum +i;
  i++;
}
//console.log(sum);

let countdown = []
let u = 5;

while (u >= 0) {
  //console.log(u);
  countdown.push(u);
  u--;
}
//console.log(countdown);

let countdownTea = []
let tea;

do {
  //tea = prompt(`Type yout favorite tea (type "stop" to finished).`);
  if (tea !== "stop"){
    //countdownTea.push(tea);
  }
} while (tea !== "stop");

let total = 0;
let k = 1;

do {
  total += k;
  k++;
} while (k <= 3);
/////////////////////////////////////////////
let citiesPopulation = {
  "London": 89000,
  "New York": 84000,
  "Paris": 82000,
  "Berlin": 47000,
}

let cityNewPopulation = {}

for (const city in citiesPopulation) {
    if (city == "Berlin"){
        break;
    }
  cityNewPopulation[city] = citiesPopulation[city];
}
//console.log(cityNewPopulation);

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let avaliableTeas = [];