function resetBg(){
    document.querySelector("#resetbgbtn").disabled = true;
    document.body.style.backgroundColor = "white";
}

function randomBg(){
    document.querySelector("#resetbgbtn").disabled = false;

    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);
  
    document.body.style.background = bgColor;
    
}

function convertDegreeC2F(celcius){
    var c = celcius;
    var f = c * 9 / 5 + 32;
    var result = c + "\xB0C is " + f + "\xB0F";  // celcius and fahrenheit code

    console.log(result);
}

convertDegreeC2F(30);

function convertDegreeF2C(fahrenheit){
    var f = fahrenheit;
    var c = (f - 32) * 5 / 9;
    var result = f + "\xB0F is " + c + "\xB0C";  // celcius and fahrenheit code

    console.log(result);
}
convertDegreeF2C(30);

function showCar(){
    var car = {
        brand:"BMW",
        model:"X5",
        color:"Black",
        type:"suv",
        carDetail: function(){  // Method
            return this.brand + " " + this.model + " " + this.color + " " + this.type;  // this ~== object
        }
    
    };
    console.log(car.carDetail());
    // console.log(car)
    // console.log(car["brand"])

}
showCar();

function displayDateTime(){
    document.getElementById("datetime").innerHTML = Date();
    hidden = false
    document.getElementById("datetime").style.visibility = "visible";
    document.getElementById("invbtn").style.visibility = "visible";
    document.querySelector("#invbtn").innerText = "Hide time";
    document.querySelector("#timebtn").innerText = "Update Time";

}


function displayArrayAsString(){
    var vendor = ["Honda","Kawasaki","Suzuki"];
    // document.getElementById("vendor").innerHTML = vendor.toString();
    console.log("Display Arr as String: " + vendor.join(" - "))

}
displayArrayAsString();

function switchDate(){
    switch(new Date().getDay()){
        case 0:
            console.log("Today is sunday")
            break;
        case 1:
            console.log("Today is monday")
            break;
        case 2:
            console.log("Today is tuesday")
            break;
        case 3:
            console.log("Today is wednesday")
            break;
        case 4:
            console.log("Today is thursday")
            break;
        case 5:
            console.log("Today is friday")
            break;
        case 6:
            console.log("Today is saturday")
            break;

        
    }
}

switchDate()

hidden = false;

function invisibleMe(){
    
    hidden = !hidden;
    if(hidden){
        document.getElementById("datetime").style.visibility = "hidden";
        // document.querySelector("#timebtn").innerText = "Show time";
        document.querySelector("#timebtn").disabled = true;

        document.querySelector("#invbtn").innerText = "Show time";

    }else{
        document.getElementById("datetime").style.visibility = "visible";
        document.querySelector("#invbtn").innerText = "Hide time";
        document.querySelector("#timebtn").disabled = false;
    }

}

document.getElementById("console").innerHTML = "**Other result in dev tools: console";


function templatestr(txt){

    console.log(`Hello ${txt} !!!`)
}

templatestr("Template String")

/*
var arrowFunction = function(txt){
    return `Hello ${txt} !!`;
}
*/

var arrowFunction = txt => `Hello ${txt} !!`;

console.log(arrowFunction("Arrow Function"));


class cvendor{
    constructor(brand,color,year){  // property of class
        this.brand = brand;
        this.color = color;
        this.year = year;
    }

    fullName(owner){ //method
        return `${owner}: ${this.brand} ${this.color} ${this.year}`;
    }
}

var vendor = new cvendor("BMW","Black","2019");

console.log(vendor.fullName("Nattapon"));