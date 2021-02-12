const navBar = document.querySelector("header");
const container = document.querySelector(".color-output");
const hexNumber = document.querySelector(".typer");
const button = document.querySelector(".btn-converter");
const redOutput = document.querySelector(".red-output");
const greenOutput = document.querySelector(".green-output");
const blueOutput = document.querySelector(".blue-output");
const resetBtn = document.querySelector(".btn-reset");
const outputString = document.querySelector(".rgb-output");
const rgbCode = document.querySelector(".rgbString");
const copyBtn = document.querySelector(".copy-btn");
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

button.addEventListener('click', () => {
  changeBackgroundColor();
  const rgbString = hex_to_RGB(hexNumber.value);
  redOutput.innerHTML = rgbString.r;
  greenOutput.innerHTML = rgbString.g;
  blueOutput.innerHTML = rgbString.b;
  rgbCode.innerHTML = `rgb(${rgbString.r}, ${rgbString.g}, ${rgbString.b})`;
});

resetBtn.addEventListener('click', () => {
  hexNumber.value = "#000000";
  redOutput.innerHTML = "";
  greenOutput.innerHTML = "";
  blueOutput.innerHTML = "";
  container.style.backgroundColor = "#000";
  rgbCode.innerHTML = `rgb(00, 00, 00)`;
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

tippy('.copy-btn', {
  trigger: 'click',
  content: 'copied'
})

tippy('.color-output', {
  animation: 'scale-subtle',
  theme: 'bw-gradient',
  content: 'color preview',
  placement: 'top-start',
  arrow: false
})

// for the clipboard copying
new ClipboardJS('.copy-btn');

const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
})

sr.reveal('.header', { interval: 200 });
sr.reveal('.component', { delay: 200 });
sr.reveal('.result-div', { interval: 200 });
sr.reveal('.red-output', { delay: 200 });
sr.reveal('.green-output', { delay: 300 });
sr.reveal('.blue-output', { delay: 400 });
sr.reveal('.label', { delay: 500 });
sr.reveal('.color-output', { delay: 600 });
sr.reveal('.btn1', { delay: 200 });
sr.reveal('.btn2', { delay: 300 });