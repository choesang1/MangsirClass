let cart = [
    {
        price: 100,
        quantity: 4,
    },
    {
        price: 10,
        quantity: 3,
    },
    {
        price: 50,
        quantity: 5,
    },
    {
        price: 30,
        quantity: 2,
    },
];
//calculating the total cost

const total=cart.slice(0,2)
.reduce((acc,curr)=>acc+curr.price*curr.quantity,0);
console.log('total cost',total);

let totalItems=cart.slice(1,3);
console.log(totalItems);


let courses=[
    {
    class:'php',
    conpleteStatus:false
},
{
    class:'mern',
    conpleteStatus:true
},
{
    class:'java',
    conpleteStatus:true
},
{
    class:'devops',
    conpleteStatus:true
},
];

let completed=[]
let incomplete=[]

for (let index = 0; index < courses.length; index++) {
    const element = courses[index];
    if (element.conpleteStatus) {
        completed.push(element.class)
    } else{
        incomplete.push(element.class)
    }
    
}
console.log(completed);
console.log(incomplete);

let countries=[
    {
        name:'Nepal',
        code:'NP'
    },
    {
        name:'India',
        code:'IN'
    },
    {
        name:'USA',
        code:'US',
    },
    {
        name:'Australia',
        code:'AUS'
    },
];

// function getCountryCode(countryName) {
//     let country=countries.find(c=>c.name.toLowerCase()==countryName.toLowerCase())
//     if (country) {
//         return country.code
//     } else {
//         return 'country not found';
//     }
// }
// console.log(getCountryCode('USA'));
// console.log(getCountryCode('UAE'));

const getCountryCode=(countryName)=> {
    let country=countries.find(c=>c.name.toLowerCase()==countryName.toLowerCase())
    if (country) {
        return country.code
    } else {
        return 'country not found';
    }
}
console.log(getCountryCode('USA'));
console.log(getCountryCode('UAE'));

