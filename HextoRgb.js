const navBar = document.querySelector("header");
const container = document.querySelector(".wrapper");
const hexNumber = document.querySelector(".input");
const redOutput = document.querySelector(".red");
const greenOutput = document.querySelector(".green");
const blueOutput = document.querySelector(".blue");
const converterBtn = document.querySelector(".converter");
const resetBtn = document.querySelector(".reset");
const accordion = document.querySelectorAll(".contentBox");

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

converterBtn.addEventListener('click', () => {
  changeBackgroundColor();
  const rgbString = hex_to_RGB(hexNumber.value);
  redOutput.innerHTML = rgbString.r;
  greenOutput.innerHTML = rgbString.g;
  blueOutput.innerHTML = rgbString.b;
});

resetBtn.addEventListener('click', () => {
  hexNumber.value = "";
  redOutput.innerHTML = "";
  blueOutput.innerHTML = "";
  greenOutput.innerHTML = "";
  container.style.backgroundColor = "#a6c0d4";
});

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