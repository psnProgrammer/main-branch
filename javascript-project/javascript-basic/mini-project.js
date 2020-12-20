function resetBg(){
    document.body.style.backgroundColor = "white";
}

function randomBg(){
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
    var result = c + '\xB0C is ' + f + '\xB0F';  // celcius and fahrenheit code

    console.log(result)
}

console.log(convertDegreeC2F(30));

function convertDegreeF2C(fahrenheit){
    var f = fahrenheit;
    var c = (f - 32) * 5 / 9;
    var result = f + '\xB0F is ' + c + '\xB0C';  // celcius and fahrenheit code

    console.log(result)
}
console.log(convertDegreeF2C(30));

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



