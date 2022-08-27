$(document).ready(function () {
    $('.slider').slick({
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // arrows: true,
        // prevArrow: "<img class='slick-arrow_left' src='/img/Vector 6 (3).png'>",
        // nextArrow: "<img class='slick-arrow_right' src='/img/Vector 6.png'>",
        // appendArrows: $('.slider_photos'),
        // dots: true,
        // infinite: true,
        // centerMode: true,
        // аccessibility: true
    });
});






let burger_menu = document.getElementById("burger_menu")
burger_click = () => {
    burger_menu.classList.toggle("none")
}
let contact = document.getElementById("contact")
bt_contact = () => {
    contact.classList.toggle("none")
}
close_contact = () => {
    contact.classList.add("none")
}
Products_element = () => {
    window.scrollBy(0, 1000)
}
Engineering_element = () => {
    window.scrollBy(10, 6600)
}
Factory_element = () => {
    window.scrollBy(10, 2900)
}
Packing_element = () => {
    window.scrollBy(10, 7700)
}

// let btnLeft = document.getElementById('btnLeft');
// let btnRight = document.getElementById('btnRight');
// let slides = document.getElementsByClassName("slider__img");
// let buttons = document.getElementsByClassName('photos__button');
// let positionSlide = 0;


// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function () {
//         slideSwitch(buttons[i].dataset.name)
//     });
// }

// function slideSwitch(slideNumber) {
//     if (typeof slideNumber === 'number') {
//         for (let i = 0; i < slides.length; i++) {
//             if (i != slideNumber) {
//                 slides[i].classList.remove('slider__img_active');
//             } else {
//                 slides[i].classList.add('slider__img_active');
//             }
//         }
//     } else {
//         for (let i = 0; i < slides.length; i++) {
//             if (slides[i].dataset.name != slideNumber) {
//                 slides[i].classList.remove('slider__img_active');
//             } else {
//                 slides[i].classList.add('slider__img_active');
//             }
//         }
//     }
// }

// function validSlideNumberCheck(slideNumber) {
//     let validNumber = slideNumber;

//     if (slideNumber < 0) {
//         validNumber = slides.length - 1;
//     } else if (slideNumber > slides.length - 1) {
//         validNumber = 0;
//     }

//     positionSlide = validNumber;

//     return positionSlide;
// }

// btnLeft.onclick = function () {
//     let newSlide = positionSlide - 1;
//     slideSwitch(validSlideNumberCheck(newSlide));
// }

// btnRight.onclick = function () {
//     let newSlide = positionSlide + 1;
//     slideSwitch(validSlideNumberCheck(newSlide));
// }