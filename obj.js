//Objects and Prototypes
//an object is just a collection of multiples values

var myObj = {};


myObj.name = "Nishant";


function CreateEmployeeObj (fistName,lastName,gender,designation){
   this["firstName"] = fistName,
    this["lastName"] = lastName,
    this["gender"] = gender,
    this["designation"]=designation;

    
}
//to add new property to existing obj we use prototype
 CreateEmployeeObj.prototype.salary = 2000;
var emp1 = new CreateEmployeeObj("Jim", "Halpert", "M", "Salesman");

console.log(emp1.salary)

//if we want to create an object we use constructor which tells js that this is a func to create obj
//way to tell js that this is constructor func we use "new"
//we use capital letter first for object in function


//JavaScript String Reference  

//constructor
let str = "hello world";

str.constructor;
//[Function: String]
//constructor

//charAt() The charAt() method returns the character at a specified index in a string.
let str1 = "hello world";
str1.charAt(1)
//e
//charAt()

//charCodeAt() it gives us acii value 
let str2 = "Hello World";

str2.charCodeAt(0)
//72
//charCodeAt()

//concat() method joins two or more strings. does not change the existing strings, but returns a new string.
let str3 = "Hello";
let str4= "World";
str3.concat(str4);

//concat()


//prototypes in js

function Particles (){
    this.x = 100;
    this.y = 99;
}

let p = new Particles();


