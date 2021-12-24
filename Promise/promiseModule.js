


function Addition(number1,number2)
{
    return new Promise((reject, resolve)=>{
        resolve(number1+number2)
    })
}

module.exports={Addition}