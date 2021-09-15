var chnageHeader = document.getElementById("header");
var calculator = document.getElementById("calculator");
var age = document.getElementById("age-input");
var weight = document.getElementById("wight-input");
var height = document.getElementById("height-input");
let close = document.querySelector('.close');
let popup = document.querySelector('.popup');
var resault = document.getElementById("resault");
var explane = document.getElementById("explane");
var body = document.getElementById("body");

calculator.addEventListener("click", function() {
    var bmi = weight.value / (height.value / 100 * height.value / 100);
    var bmio = (bmi.toFixed(2));
    popup.classList.add('active');
    if (age.value == '' || height.value == '' || weight.value == '') {
        resault.innerHTML = "Please Fill All Input";
    }
    if (bmio < 18.5) {
        resault.innerHTML = 'Your BMI is : ' + bmio;
        explane.innerHTML = "You Are Underweight";
        explane.style.color = "#fdcb6e";
        body.style.backgroundColor = "#fdcb6e";
    } else if (18.5 <= bmio && bmio <= 24.9) {
        resault.innerHTML = 'Your BMI is : ' + bmio;
        explane.innerHTML = "You Are Healthy";
        explane.style.color = "#55efc4";
        body.style.backgroundColor = "#55efc4";
    } else if (25 <= bmio && bmio <= 29.9) {
        resault.innerHTML = 'Your BMI is : ' + bmio;
        explane.innerHTML = "You Are OverWeight";
        explane.style.color = "#ff7675";
        body.style.backgroundColor = "#ff7675";
    } else if (30 <= bmio && bmio <= 34.9) {
        resault.innerHTML = 'Your BMI is : ' + bmio;
        explane.innerHTML = "You Are Obese"
        explane.style.color = "#d63031";
        body.style.backgroundColor = "#d63031";
    } else if (35 <= bmio) {
        resault.innerHTML = "Your BMI is : " + bmio;
        explane.innerHTML = "You Are Extremely Obese"
        explane.style.color = "#2d3436";
        body.style.backgroundColor = "#2d3436";
    }
})

close.addEventListener('click', function() {
    popup.classList.remove('active');
    body.style.backgroundColor = "#e4e4e4";
    age.value = "";
    weight.value = "";
    height.value = "";
    explane.innerHTML = "";
})

chnageHeader.addEventListener("click", function() {
    if (chnageHeader.innerHTML == "<span>B</span>ody <span>M</span>ass <span>I</span>ndex Calculator") {
        chnageHeader.innerHTML = "The body mass index (BMI) or Quetelet index is a value derived from the mass (weight) and height of an individual. The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m2, resulting from mass in kilograms and height in metres.";
        chnageHeader.classList.add("bmi-wiki");
    } else if (chnageHeader.innerHTML == "The body mass index (BMI) or Quetelet index is a value derived from the mass (weight) and height of an individual. The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m2, resulting from mass in kilograms and height in metres.") {
        chnageHeader.innerHTML = "<span>B</span>ody <span>M</span>ass <span>I</span>ndex Calculator";
        chnageHeader.classList.remove("bmi-wiki");
    }
})