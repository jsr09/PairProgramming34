//EXERCISE ONE
const myButton = document.querySelector("#cookie");

myButton.addEventListener('click', function() {
console.log('Eat Me!');
counter = counter +1;

const myCounter = document.querySelector('#counter');
myCounter.innerHTML = counter;

})
let counter = 0;

// EXERCISE TWO
const myButton1 = document.querySelector(".button1");
const myButton2 = document.querySelector(".button2");

myButton1.addEventListener('click',function() {
    console.log('I said eat me');
    const myPar = document.querySelector(".par");

    if(myPar == document.querySelector(".button1")) {
        fontSize -= 5;
    } 
    myPar.innerHTML = fontSize;
})

// let parSmaller = myButton1 - "5px"

// function changeFontSize(target) {
//     var demo = document.getElementById("demo");
//     var computedStyle = window.getComputedStyle
//           ? getComputedStyle(demo) // Standards
//           : demo.currentStyle;     // Old IE
//     var fontSize;
  

// if (computedStyle) { // This will be true on nearly all browsers
//     fontSize = parseFloat(computedStyle && computedStyle.fontSize);

//     if (target == document.getElementById("button1")) {
//       fontSize += 5;
//     } else if (target == document.getElementById("button2")) {
//       fontSize -= 5;
//     }
//     demo.style.fontSize = fontSize + "px";
// }
// }