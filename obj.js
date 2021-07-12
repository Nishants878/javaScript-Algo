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


var emp1 = new CreateEmployeeObj("Jim", "Halpert", "M", "Salesman");

console.log(emp1);

//if we want to create an object we use constructor which tells js that this is a func to create obj
//way to tell js that this is constructor func we use "new"
//we use capital letter first for object in function
