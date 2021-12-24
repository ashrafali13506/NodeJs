interface UserDetails
{
    name:string,
    phoneNo:number,
    Hello():void,
    Welcome():string
}

 class UserInformation implements UserDetails
{
    
    name:"Ashraf";
    phoneNo:900336434;
    Hello()
    {
        console.log("UserInfor")
    }

    Welcome(){
        return "Hellow World"
    }


}

class Details implements UserDetails
{
    name: "string";
    phoneNo: 34343;
    Hello(): void {
       console.log("Class is implemented in another class")
    }
    Welcome(): string {
        return "Details class"
    }
    
}

const data=new Details();
const data1=new UserInformation();
data.Hello();
data1.Hello();