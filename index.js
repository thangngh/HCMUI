const dropDownMenu = document.querySelectorAll('.dropdown-menu');
const dropDown = document.querySelectorAll('.dropdown');
const dropSearch = document.querySelector('.drop-search');
const navSearch = document.querySelector('.nav-search');

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

navSearch.addEventListener('click', () => {
    dropSearch.classList.toggle('hidden');
});
