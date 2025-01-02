let students = [
    {
        name: 'ramesh',
        paidStatus: false,
        scholarship:true
    },
    {
        name: 'kelz',
        paidStatus: true,
        scholarship:false,
    },
    {
        name: 'alex',
        paidStatus: false,
        scholarship:false
    },
]

students.forEach((student)=>{
    if (student.paidStatus || student.scholarship) {  //! for not which oppose the given statement
        console.log(`paid ${student.name}`);
    }else{
        console.log(`not paid ${student.name}`);
    }
})