const firstMessage = "Chào mừng bạn đến với ứng dụng JavaScript đầu tiên";
alert(firstMessage);

var getName = prompt("Vui lòng nhập tên của bạn");
var getCity = prompt("Vui lòng nhập thành phố của bạn");
var getPhone = prompt("Vui lòng nhập số điện thoại của bạn");


var theName = document.getElementById("name");
var theCity = document.getElementById("city");
var thePhone = document.getElementById("phone");
var theBirth = document.getElementById("birth");

let yeuCauNhap = true;
let getBirth;
while (yeuCauNhap){
    getBirth = prompt("Vui lòng nhập năm sinh của bạn");
    let now = new Date().getFullYear;
    if (getBirth > now){
        theBirth.innerHTML = "Bạn đừng có điêu. Năm nay là năm " + now;
    } else {
        yeuCauNhap = false;
    }
}

document.getElementById("show").onclick = function showInf(){
    theName.innerHTML = getName;
    theCity.innerHTML = getCity;
    thePhone.innerHTML = getPhone;
    theBirth.innerHTML = getBirth;
};
