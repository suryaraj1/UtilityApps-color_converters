const navBar = document.querySelector("header");
const container = document.querySelector(".color-output");
const hexNumber = document.querySelector(".typer");
const button = document.querySelector(".btn-converter");
const redOutput = document.querySelector(".red-output");
const greenOutput = document.querySelector(".green-output");
const blueOutput = document.querySelector(".blue-output");
const resetBtn = document.querySelector(".btn-reset");
const outputString = document.querySelector(".rgb-output");
const accordion = document.querySelectorAll(".contentBox");

console.log(outputString);

window.onscroll = () => {
  const sticky = navBar.offsetTop;
  if (window.pageYOffset > sticky) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
};

const hex_to_RGB = (hex) => {
  var m = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
  return {
    r: parseInt(m[1], 16),
    g: parseInt(m[2], 16),
    b: parseInt(m[3], 16)
  };
}

const changeBackgroundColor = () => {
  container.style.backgroundColor = hexNumber.value;
}

button.addEventListener('click', () => {
  changeBackgroundColor();
  const rgbString = hex_to_RGB(hexNumber.value);
  redOutput.innerHTML = rgbString.r;
  greenOutput.innerHTML = rgbString.g;
  blueOutput.innerHTML = rgbString.b;
});

resetBtn.addEventListener('click', () => {
  hexNumber.value = "#000000";
  redOutput.innerHTML = "";
  greenOutput.innerHTML = "";
  blueOutput.innerHTML = "";
  container.style.backgroundColor = "#000";
})

const runAccordion = () => {
  for (let i = 0; i < accordion.length; i += 1) {
    accordion[i].addEventListener('click', () => {
      accordion[i].classList.toggle('activate');
      for (let j = 0; j < accordion.length; j += 1) {
        if (i !== j && accordion[j].classList.contains('activate')) {
          // switches off other accordions
          accordion[j].classList.toggle('activate');
        }
      }
    });
  }
};

runAccordion();

// tooltip part here
const redColor = String.fromCodePoint(0x1F534);
const greenColor = String.fromCodePoint(0x1F7E2);
const blueColor = String.fromCodePoint(0x1F535);

tippy('.red-output', {
  content: "Red Color " + redColor,
  animation: 'scale-subtle',
  theme: 'red-gradient',
})

tippy('.green-output', {
  content: "Green Color " + greenColor,
  animation: 'scale-subtle',
  theme: 'green-gradient',
})

tippy('.blue-output', {
  content: "Blue color " + blueColor,
  animation: 'scale-subtle',
  theme: 'blue-gradient',
})