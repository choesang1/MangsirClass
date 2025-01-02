let cardItems = [
    {
        name: 'kelz',
        products: [
            {
                title: 'phone',
                price: 1000
            },
            {title: 'laptop',price: 10000},
            {title: 'airpods',price: 100},
        ]
    },
    {
        name: 'alex',
        products: [
            {title: 'jeans',price: 1000},
            { title: 'shirt', price: 1000 },
            { title: 'pant', price: 500 },
        ]
    },
    {
        name: 'sandip',
        products: [
            {title: 'pen',price: 110},
            { title: 'copy', price: 100 },
            { title: 'eraser', price: 100 },
        ]
    }
]
cardItems.map((prod) => {
    let totalExpense = prod.products.reduce(
        (sum,product)=> sum+product.price,0);
    console.log(`${prod.name} spends total ${totalExpense}`);
})


let fruits=[
    { name:'orange',
        scientificname:'kkk',
        prices:[
           { country:'Nepal',
            price:100
           },
           { country:'India',
            price:40
           },
           { country:'USA',
            price:20
           },
           { country:'AUS',
            price:30
           },

        ]
    },
    { name:'apple',
        scientificname:'kkk',
        prices:[
           { country:'Nepal',
            price:10
           },
           { country:'India',
            price:4
           },
           { country:'USA',
            price:2
           },
           { country:'AUS',
            price:3
           },

        ]
    }
];
fruits[0].prices.map((e)=>{
    console.log(`${e.country} price of orange ${e.price}`);
})
fruits[1].prices.map((e)=>{
    console.log(`${e.country} price of apple ${e.price}`);
})