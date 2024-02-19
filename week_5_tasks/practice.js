


var fruits=["mango","orange","pine-apple"]
 console.log(fruits)

 fruits.push("apple");
console.log("Hello world")
console.log(fruits)
fruits.pop()
console.log(fruits)
fruits.shift()
console.log(fruits)
fruits.slice(0,2)
console.log(fruits)
var fruitss = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruitss.slice(1, 3);
// console.log(citrus)
const res= fruitss.splice(1,3)
console.log(fruitss)
// const fruit = ["Banana", "Orange", "Apple", "Mango"];

// // At position 2, add 2 elements: 
// fruitss.splice(2, 0, "Lemon", "Kiwi");
console.log(fruitss)

// var remove = fruitss.splice(1,3)
// console.log(remove)

// OBJ
console.log()
console.log("********* OBJ CREATION ************")
var obj ={
    name:"Muskan",
    cms:"021-21-0031",
    age:"20"
}

console.log(obj)
console.log(Object.keys(obj))
console.log(Object.entries(obj))
// const target = { a: 1, b: 2 };
const source = { name: "Sonia", c: 5 };

const returnedTarget = Object.assign(obj, source);
console.log(returnedTarget)
console.log(obj)
console.log(Object.getOwnPropertyNames(obj));
// console.log(Object.freeze(obj));
console.log(Object.seal(obj));
obj.department="BSCS-VII"
obj.age=30;
console.log(obj)

console.log()
console.log("********* funnction CREATION ************")
function greet(name) { 
    return 'Hello, ' + name + '!'; 
}

    console.log(greet("Muskan"));

    const greetArrow = (name) => { return 'Hello, ' + name + '!'; };
    const func = (age) => {
        return 'Your age is =' + age 
    }
    console.log(func(20))
    console.log(greetArrow("Musek"));

    const greetAnonyms = function(name) { 
        return 'Hello, ' + name + '!'; };

        const numbers = [1, 2, 3, 4, 5]; 
        const doubled = numbers.map(
            function(num) 
            { 
                return num * 2; }
            );
                var doubArr=[]
        console.log(doubled)
        function doubleFunc(num = [],m=number){
            for(let i of num ){
                var k = i*m
                doubArr.push(k)
            }
            return doubArr;
        }
        console.log(numbers)
        console.log(doubleFunc(numbers,3))

        