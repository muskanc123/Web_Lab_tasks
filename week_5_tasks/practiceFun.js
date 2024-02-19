var numbers = [1,2,3,4,5,6,7,8]

const doubled = numbers.filter(    // forEach does not return values and map return values
    function(item) 
    { 
        // console.log(item*2)
        
            return item % 2 == 0
        
    }
    );
    console.log(doubled)

    console.log(numbers.filter(item => !(item % 2) ));  // one liner function

    var names=["Muskan","Sonia","Hello"]

    console.log(names.filter(item => item.includes('e') ));  // one liner function

    console.log([1,2,3,4,4].reduce((total,item) => {
         return total+item;

    }
    ))
   