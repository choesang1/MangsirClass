// arithmetic operators, comparision operators and logical operators

let realNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let oddNumber = []
let evenNumber = []
for (let index = 0; index < realNumbers.length; index++) {
    const element = realNumbers[index];
    if (element % 2 == 0) {
        evenNumber.push(element)
    } else {
        oddNumber.push(element)
    }

}
console.log('this is even number', evenNumber);
console.log('this is odd number', oddNumber);

let a = 'five'
let b = 5

if (a == b) {
    console.log('they are equal');
} else {
    console.log('they are not equal');
}


// logical operator

let rain = true
let sun = false
let wind = true

if (rain || sun || wind == true) {
    console.log('take umbrella');
} else {
    console.log('no need to take umbrella');
}

// let number = [1,2,3,"four"] not a correct format

// array is collection of similar data types

let names = ['ramesh', 'ram', 'sita', 'hari'] //correct format

let fruits = [
    {
        id: 1,
        title: 'mango',
        price: 200,
        description: "yellow"

    },
    {
        id: 2,
        title: 'apple',
        price: 300,
        description: "red"

    },
    {
        id: 3,
        title: 'grapes',
        price: 100,
        description: "green"

    }
]

console.log(fruits);