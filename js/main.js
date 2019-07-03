// คำสั่งแสดงป๊อบอัพ
// alert("Hello JavaScript");

// คำสั่งแสดงข้อความบนหน้าเว็บ
document.write("Hello form JavaScript<br>");

// การสร้างตัวแปรใน Javacript
var name = "John Carter";
var age = 14;
var status = "single";

// แสดงผลตัวแปร
document.write(name);

// การแสดงผลตัวแปรผ่าน console
console.log("age = "+age);
console.log("status = "+status);

// คำสั่ง confirme ของ javascript
//var conf = confirm("You want to delete this item ?");
//console.log(conf);
/*
if(conf){
    console.log("Delete success");
}else{
    console.log("You cancel this");
}
*/

// Condition Operator
var permiss = (age >= 18) ? "Allow":"Not allow";
console.log(permiss);

var your_age = prompt("Enter your age");
// Condition if...elseif ...else
if(your_age >=18  &&  your_age <= 29){
    console.log("Young");
}else if(your_age >= 30 &&  your_age <= 59){
    console.log("Adult");
}else if(your_age >= 60){
    console.log("Old");
}else{
    console.log("Not define");
}

// Switch ... case
var color = prompt("Choose color\n type 1 = red\n type 2 = green \n type 3 = blue");
switch(parseInt(color)){
    case 1:
        document.body.style.backgroundColor = "red";
        break;
    case 2:
        document.body.style.backgroundColor = "green";
        break;
    case 3:
        document.body.style.backgroundColor = "blue";
        break;
    default:
        document.body.style.backgroundColor = "white";
        break;
}