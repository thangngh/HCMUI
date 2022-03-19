const dropDownMenu = document.querySelectorAll('.dropdown-menu');
const dropDown = document.querySelectorAll('.dropdown');
const dropSearch = document.querySelectorAll('.drop-search');
const navSearch = document.querySelectorAll('.nav-search');
const mbNav = document.querySelector('.mb-nav-navbar');
const mbIcon = document.querySelector('.mb-icon');

dropDown.forEach((element, v) => {
    element.addEventListener('mouseleave', () => {
        dropDownMenu.forEach((e, ix) => {
            if (v === ix) {
                e.classList.add('hidden');
                e.classList.remove('block');
            }
        });
    });
    element.addEventListener('mouseover', () => {
        dropDownMenu.forEach((e, ix) => {
            if (v === ix) {
                e.classList.add('block');
                e.classList.remove('hidden');
            }
        });
    });
});

navSearch.forEach((element, v) => {
    element.addEventListener('click', () => {
        dropSearch.forEach((e, ix) => {
            e.classList.toggle('hidden');
        });
    });
});

mbIcon.addEventListener('click', () => {
    mbNav.classList.toggle('hidden');
});

$(document).ready(function () {
    $('.carousel-inner').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:
            "<button type='button' class='slick-prev pull-left'><span class='material-icons' aria-hidden='true'>chevron_left</span></button>",
        nextArrow:
            "<button type='button' class='slick-next pull-right'><span class='material-icons' aria-hidden='true'>navigate_next</span></button>",
    });
});
