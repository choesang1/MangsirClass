
//for loop
// for (let index = 0; index < 10; index++) {
//     // const element = [index];
//     // console.log(element);
//     console.log(index);
    
// }
// foreach
//create a multiplication table of 2 using foreach 
// let realNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let oddNumber = []
// let evenNumber = []
// realNumbers.forEach((i)=>{
//     if (i%2==0) {
//         evenNumber.push(i);
//     } else {
//         oddNumber.push(i);
//     }
// })
// console.log('this is even number', evenNumber);
// console.log('this is odd number', oddNumber);

//map loop
let realNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let oddNumber = []
let evenNumber = []
realNumbers.map((i)=>{
    if (i%2==0) {
        evenNumber.push(i);
    } else {
        oddNumber.push(i);
    }
})
console.log('this is even number', evenNumber);
console.log('this is odd number', oddNumber);

//multiplication table of two using for loop
for (let index = 1; index <=10; index++) {
    const tableoftwo = [index]*2;
    console.log('2x',index,'=',tableoftwo);
    
}

// number=[1,2,3,4,5,6,7,8,9,10]

// number.forEach(number=console.log(number*2))
let a = [1,2,3]
a.map((a)=>{
    console.log(a);

})