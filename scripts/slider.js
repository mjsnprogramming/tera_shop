
const slide = document.querySelector('.sliders');
const images = document.querySelectorAll('.sliders img');


const previous_button = document.querySelector('.fa-angle-left');
const next_button = document.querySelector('.fa-angle-right');

let slider = () => {

    let counter = 1;

    const size = images[0].clientWidth;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    previous_button.addEventListener('click', () => {
        if (counter <= 0) {
            return;
        }
        slide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    });


    next_button.addEventListener('click', () => {
        if (counter >= images.length - 1) {
            return;
        }

        slide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    });

    slide.addEventListener('transitionend', () => {
        if (images[counter].id === 'last') {
            slide.style.transition = "none";
            counter = images.length - 2;
            slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
        if (images[counter].id === 'first') {
            slide.style.transition = "none";
            counter = images.length - counter;
            slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }

    });
};

   // setTimeout(slider, 2);

