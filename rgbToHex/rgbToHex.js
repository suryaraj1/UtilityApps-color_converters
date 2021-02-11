const navBar = document.querySelector("header");
const redSlider = document.querySelector(".red_slider");
const greenSlider = document.querySelector(".green_slider");
const blueSlider = document.querySelector(".blue_slider");
const redNumber = document.querySelector(".typer.red");
const greenNumber = document.querySelector(".typer.green");
const blueNumber = document.querySelector(".typer.blue");
const container = document.querySelector(".wrapper");
const hexNumber = document.querySelector(".hex-output");
const hexOutput = document.querySelector(".color-output");
const button = document.querySelector(".btn-converter");
const accordion = document.querySelectorAll(".contentBox");
const allRanges = document.querySelectorAll(".range-wrap");

console.log(hexOutput);

window.onscroll = () => {
    const sticky = navBar.offsetTop;
    if (window.pageYOffset > sticky) {
        navBar.classList.add("sticky");
    } else {
        navBar.classList.remove("sticky");
    }
};

button.addEventListener('click', () => {
    const redValue = Number(redNumber.value).toString(16);
    const greenValue = Number(greenNumber.value).toString(16);
    const blueValue = Number(blueNumber.value).toString(16);
    hexNumber.innerHTML = `#${redValue.padStart(2, '0')}${greenValue.padStart(2, '0')}${blueValue.padStart(2, '0')}`;
    hexOutput.style.backgroundColor = hexNumber.innerHTML;

});

const hexConverter = () => {
    const redValue = Number(redSlider.value).toString(16);
    const greenValue = Number(greenSlider.value).toString(16);
    const blueValue = Number(blueSlider.value).toString(16);
    hexNumber.innerHTML = `#${redValue.padStart(2, '0')}${greenValue.padStart(2, '0')}${blueValue.padStart(2, '0')}`;
};

const changeBackgroundColor = () => {
    hexOutput.style.backgroundColor = hexNumber.innerHTML;
}

redSlider.addEventListener('mousemove', () => {
    redNumber.innerHTML = redSlider.value;
    hexConverter();
    changeBackgroundColor();
});

greenSlider.addEventListener('mousemove', () => {
    greenNumber.innerHTML = greenSlider.value;
    hexConverter();
    changeBackgroundColor();
});

blueSlider.addEventListener('mousemove', () => {
    blueNumber.innerHTML = blueSlider.value;
    hexConverter();
    changeBackgroundColor();
});

// for the range sliders

// ref: https://codepen.io/MananTank/pen/NWqewBO?editors=1010

allRanges.forEach(item => {
    const range = item.querySelector(".slider");
    const bubble = item.querySelector(".bubble");

    range.addEventListener('input', () => {
        setBubble(range, bubble);
    });

    setBubble(range, bubble);
})

function setBubble(range, bubble) {
    const val = range.value;

    const min = range.min || 0;
    const max = range.max || 100;

    const offset = Number(((val - min) * 100) / (max - min));

    bubble.textContent = val;
    bubble.style.left = `calc(${offset}% - 14px)`;
}

// the accordion part starts here
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

const redColor = String.fromCodePoint(0x1F534);
const greenColor = String.fromCodePoint(0x1F7E2);
const blueColor = String.fromCodePoint(0x1F535);

// tooltip part here
tippy('.red-component', {
    content: "Red Color " + redColor,
    animation: 'scale-subtle',
    theme: 'red-gradient',
})

tippy('.green-component', {
    content: "Green Color " + greenColor,
    animation: 'scale-subtle',
    theme: 'green-gradient',
})

tippy('.blue-component', {
    content: "Blue color " + blueColor,
    animation: 'scale-subtle',
    theme: 'blue-gradient',
})