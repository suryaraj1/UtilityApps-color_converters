const navBar = document.querySelector("header");
const redSlider = document.querySelector(".red_slider");
const greenSlider = document.querySelector(".green_slider");
const blueSlider = document.querySelector(".blue_slider");
const redNumber = document.querySelector(".redVal");
const greenNumber = document.querySelector(".greenVal");
const blueNumber = document.querySelector(".blueVal");
const container = document.querySelector(".wrapper");
const hexNumber = document.querySelector(".hex");
const accordion = document.querySelectorAll(".contentBox");

window.onscroll = () => {
    const sticky = navBar.offsetTop;
    if (window.pageYOffset > sticky) {
        navBar.classList.add("sticky");
    } else {
        navBar.classList.remove("sticky");
    }
};

const hexConverter = () => {
    const redValue = Number(redSlider.value).toString(16);
    const greenValue = Number(greenSlider.value).toString(16);
    const blueValue = Number(blueSlider.value).toString(16);
    hexNumber.innerHTML = `#${redValue.padStart(2, '0')}${greenValue.padStart(2, '0')}${blueValue.padStart(2, '0')}`;
};

const changeBackgroundColor = () => {
    container.style.backgroundColor = hexNumber.innerHTML;
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
