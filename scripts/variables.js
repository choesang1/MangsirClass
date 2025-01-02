/// variables declaration

// var x=10
// // var y=20
// // var z= x+y
// console.log('this is sum of x and y', x);

// {
//     var x=30
//     console.log('this is block x',x);

// }

// console.log('this is global x',x);

let x=10
console.log('this is top x',x);
{
    let x=20
    console.log('this is block x',x);
}

console.log('this is bottom x',x);


const y=10
console.log('this is top y',y);
{
    const y=20
    console.log('this is block y',y);
}

console.log('this is bottom y',y);

let a="apple"
let b=5
let c=true
let d =''
console.log("type of a",typeof a,typeof b, typeof c, typeof d);
