var UserInformation = /** @class */ (function () {
    function UserInformation() {
    }
    UserInformation.prototype.Hello = function () {
        console.log("UserInfor");
    };
    UserInformation.prototype.Welcome = function () {
        return "Hellow World";
    };
    return UserInformation;
}());
var Details = /** @class */ (function () {
    function Details() {
    }
    Details.prototype.Hello = function () {
        console.log("Class is implemented in another class");
    };
    Details.prototype.Welcome = function () {
        return "Details class";
    };
    return Details;
}());
var data = new Details();
var data1 = new UserInformation();
data.Hello();
console.log(data1.Welcome());
