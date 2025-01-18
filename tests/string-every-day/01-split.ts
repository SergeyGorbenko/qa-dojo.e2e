/*
№1 Write a JavaScript function to split a string and convert it into an array of words.
Test Data :
console.log(string_to_array("Robin Singh"));
["Robin", "Singh"]
*/

function string_to_array(data: string) {
  return data.split(" ");
}

function string_to_array2(data: string): Array<string> {
  let result: Array<string> = [];
  let word: string = "";
  for (let i = 0; i < data.length; i++) {
    if ((data[i] === " " && word !== "") || i === data.length - 1) {
      result.push(word);
    } else {
      word += data[i];
    }
  }
  return result;
}

console.log(string_to_array("Robin Singh"));
console.log(string_to_array("RobinSingh"));
console.log(string_to_array("1 2 3 4 5"));

console.log(string_to_array2("Robin Singh"));
console.log(string_to_array2("RobinSingh"));
console.log(string_to_array2("1 2 3 4 5"));