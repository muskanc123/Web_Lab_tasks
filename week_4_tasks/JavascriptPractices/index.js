console.log("hello world");
console.error("ERROR")
console.warn("WARN")
let a = 12;
var b = 4;
console.log(b)
var numAsString = "10";
var numAsNumber = parseInt(numAsString);
console.log(numAsNumber)

var cars=["mango","orange","pine-apple"]

for(let item of cars){
    console.log(item)

}
var person =
{
    name: "Muskan",
    age: 22,
    cms: "021-21-0031",
    address:{
        street_no:"123",
        city:"jacobabad"

    }
};
console.log("Keys :",Object.keys(person))
let arr = Object.keys(person);
console.log("Array",arr);

for(let item of arr){
    console.log(person[item])

}
// console.log(person)
// console.log(person.name)

// console.log(person.address)
// console.log(person.address.city)

for(let item in person){
    console.log("Hello obj:",person[item])

}
 
for(let item in arr){
console.log("Arr index",item)
}

for(let item of arr){
    console.log("Arr values",item)
    }


// try {
//       var x = y / 0; 
      
//     } catch (error) {  
//         console.error("An error occurred:", error.message);
//         console.log("An error occurred:", error.message)
//         console.warn("An error occurred:", error.message)

//  }