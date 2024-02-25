
// ************       Task 1    ***************
function reverseArray(inputArray) {
    console.log("Task 1 Output")

    return inputArray.reverse();
}
let array = [1, 2, 3, 4, 5]
console.log(reverseArray(array))

// ************       Task 2    ***************

car = {
    brand:"Honda",
    model:"carryon",
    year:"2023"
}

function carInfo(obj){
    console.log("Task 2 Output")
 let carInfo ="The "+obj.brand+ " "+obj.model+ " was manufactured in " +obj.year
  return carInfo
}

console.log(carInfo(car))

const numbers = [1, 2, 3, 4, 5]; 

const doubleFunc = (num) => num * 2;
function applyFunction(numArray,func){
    console.log("Task 3 Output")
    return numbers.map(func);
}
console.log(applyFunction(numbers,doubleFunc))

