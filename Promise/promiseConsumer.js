

const add=require('./promiseModule.js')

add.Addition(4,5).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
});