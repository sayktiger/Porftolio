document.addEventListener("DOMContentLoaded", function() {

	const hamburger = document.querySelector(`.hamburger`),
    menu = document.querySelector(`.menu`),
    close = document.querySelector(`.menu__close`),
    overlay = document.querySelector(`.menu__overlay`),
    link = document.querySelectorAll(`.menu__link`),
    linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 0.4; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)


hamburger.addEventListener(`click`, () => {
    menu.classList.add(`menu__active`);
});

close.addEventListener(`click`, () => {
    menu.classList.remove(`menu__active`);
})

overlay.addEventListener(`click`, () =>{
    menu.classList.remove(`menu__active`);
});

// link.addEventListener(`click`, () =>{
//     menu.classList.remove(`menu__active`);
// });
link.forEach((item,i) => {
    link[i].addEventListener(`click`, () =>{
        menu.classList.remove(`menu__active`);
    });
});

for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}


const counters = document.querySelectorAll(`.skill__rating-item-counter`),
      lines = document.querySelectorAll(`.skill__rating-item-line span`);

counters.forEach((item,i) =>{
    lines[i].style.width = item.innerHTML;
});

});

