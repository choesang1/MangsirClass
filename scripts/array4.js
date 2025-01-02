// let number = [1,2,3,4,5,6,7]
// const filterNumber=number.filter(num=>num>4)

// console.log(filterNumber);

let number = [1, 2, 3, 4, 5, 6, 7];
const findNumber = number.find((num) => num > 3);

console.log(findNumber);

const sentence = "i am a software developer";

let words = sentence.split(" "); // space between '' shows denotes the split if i/m/a/software /denotes the split
console.log("this is words", words);
console.log("there are no of word", words.length);

let num = [1, 2, 3, 4];
// let newNum = num.push(5);  //push add new data
console.log(num);
// console.log(newNum);

let removeNum = num.pop(4); //pop removes the data assigned
console.log(num);

//assignment to explore shift unshift method in array, index of, find index, includes, splice

let num1 = [1, 2, 5, 6];
let num2 = [...num1, 3, 4, 7]; //spread opperator copies value of num1 and add to num2

console.log(num2);

const jsonString = '{"name":"john","age":10,"city":"ktm"}';
const data = JSON.parse(jsonString);
console.log(data);
console.log(data.name);
console.log(data.age);
console.log(data.city);

let stringData=JSON.stringify(data);
console.log(stringData);
console.log(stringData.indexOf("a",1));
console.log(data.name.slice(1,4));
console.log(stringData.search('john'));
console.log(data.name.includes('o'));