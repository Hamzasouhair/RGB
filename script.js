// RGB Colors

// variables to store HTML ELEments
let redInEl = document.getElementById("redIn");
let greenInEl = document.getElementById("greenIn");
let blueInEl = document.getElementById("blueIn");
let rgbStringOutEl = document.getElementById("rgbstrout");
let displayEl = document.getElementById("display");

// Event listeners
redInEl.addEventListener("input", rgbPreview);
greenInEl.addEventListener("input", rgbPreview);
blueInEl.addEventListener("input", rgbPreview);

// Event function
function rgbPreview() {
    // Input: get red green and blue values
    let rValue = +redInEl.value;
    let gValue = +greenInEl.value;
    let bValue = +blueInEl.valeue

    //validate colours (constrain colors between 0-255)
    //check rValue
    if (rValue < 0) {
    rValue = 0;
    redInEl.value = 0;
    }else if (rValue > 255) {
        rValue = 255;
        redInEL.value = 255;
    }

    //check gValue
    if (gValue < 0) {
       gValue = 0;
       greenInEl.value = 0;
    }else if (gValue > 255) {
        gValue = 255;
        greenInEl.value = 255;
    }

    // process: build rgb string rgb( _, _, _)
    let rgbString = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";
    
    //output: display rgb string and update the color preview 
    rgbString.El.innerHTML = rgbString;
    displayEl.style.background = rgbString;
}
