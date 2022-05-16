const images = document.querySelectorAll('.slider_inner img')
const sliderInner = document.querySelector('.slider_inner')

let count = 0;
let width;

function initSlider() {
    width = document.querySelector('.slider').offsetWidth;
    sliderInner.style.width = width * images.length + 'px';

    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });

    rollSlider()
}

initSlider()
window.addEventListener('resize', initSlider);

document.querySelector('.slider_next').addEventListener('click', () => {
    count++;
    count >= images.length ? count = 0 : false

    rollSlider()
})

document.querySelector('.slider_prev').addEventListener('click', () => {
    count--;

    count < 0 ?  count = images.length - 1 : false

    rollSlider()
})

function rollSlider() {
    sliderInner.style.transform = 'translate(-' + count * width + 'px)';
}
