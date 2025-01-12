const hour = 13;

if (hour >= 6 && hour < 12) {
  console.log("Доброго ранку!");
} else if (hour >= 12 && hour < 18) {
  console.log("Доброго дня!");
} else if (hour >= 18 && hour < 23) {
  console.log("Доброго вечора!");
} else if ((hour >= 23 && hour < 24) || (hour >= 0 && hour < 6)) {
  console.log("Доброї ночі!");
} else {
  console.error("Не вірно введений час");
}

// ріщення chatgpt
// const greetings = [
//   "Доброї ночі!", // 0-5
//   "Доброго ранку!", // 6-11
//   "Доброго дня!", // 12-17
//   "Доброго вечора!", // 18-22
//   "Доброї ночі!", // 23
// ];

// if (hour < 0 || hour >= 24) {
//   console.error("Не вірно введений час");
// } else {
//   // Для 23.5 або більше, але менше 24, виводимо "Доброї ночі!"
//   if (hour >= 23) {
//     console.log(greetings[0]);
//   } else {
//     console.log(greetings[Math.floor(hour / 6)]);
//   }
// }
