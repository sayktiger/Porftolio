const hamburger = document.querySelector(`.hamburger`),
    menu = document.querySelector(`.menu`),
    close = document.querySelector(`.menu__close`),
    overlay = document.querySelector(`.menu__overlay`);

hamburger.addEventListener(`click`, () => {
    menu.classList.add(`menu__active`);
});

close.addEventListener(`click`, () => {
    menu.classList.remove(`menu__active`);
})

overlay.addEventListener(`click`, () =>{
    menu.classList.remove(`menu__active`);
});