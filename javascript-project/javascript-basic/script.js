// output 

console.log("External Script ! ");

document.getElementById("text").innerHTML = ("Text from document.getElementById innerHTML");

document.write("Write Document\n");

window.alert("Window Alert Box"); 

// variables

var price = 1;
var price2 = 2;
var sum = price + price2;

console.log("\nsum = " + sum);


// functions

function myFunction(value1,value2){
    return value1+value2
}

console.log(myFunction(3,5))