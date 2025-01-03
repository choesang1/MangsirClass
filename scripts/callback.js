fetchData =(kelz)=>{
    console.log('api is fetching');
    setTimeout(() => {
        kelz('api is fetched')
    }, 3000);

}
fetchData((k)=>{
    console.log(k);
})

console.log('this is middle log');
setTimeout(() => {
    console.log('tata');
}, 5000);
///
//
