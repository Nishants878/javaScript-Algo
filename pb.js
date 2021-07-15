// const users = [
// 	{
// 		firstName: "Sachiv",
// 		lastName: "Mehta",
// 	},
// 	{
// 		firstName: "Manoj",
// 		lastName: "Kumar",
// 	}
// ];

// const a = users.map(item => item.fullName = `${item.firstName} ${item.lastName}`).filter(item => item.fullName == "Manoj Kumar");



// console.log(a)
// const a = users.filter(item => 
//     item.firstName == "Sachiv"
// );

// console.log(a)


// var str = 'Geeks for Geeks'.split("for");

// console.log(str);




function reverse (str){
    let a  = str.split('');
    const b = a.reverse();

    return console.log(b.join(""))
};

let a = [{name:"mukesh",age:30,place:"delhi"},{name:"Nishant",age:23,place:"up"},{name:"Karl", age:23, place:"up"}];

const n = a.filter(item => item.age == 23);

const fullName = n.map(item => item.name)


//


let mainArray = [1,6,8,6,8,4,3,2,9,6,2,4,3,6,1,5,7];

let sortedArray = mainArray.sort((a,b)=> a-b);
let squaring = sortedArray.map(item =>
    item * item
);
let filteringDuplicate = squaring.filter((item, pos )=> squaring.indexOf(item) == pos
  )
console.log(filteringDuplicate)

result
// [1,4,9,16,25,36,49,64,81]
