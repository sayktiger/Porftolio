document.addEventListener(`DOMContentLoaded`, () => {
  new WOW().init();
  const body = document.querySelector(`body`),
    modalButton = body.querySelector(`.footer__menu__btn`),
    modal = body.querySelector(`.modal`),
    modalClose = body.querySelector(`.modal__close`),
    tabContent = body.querySelectorAll(`.clasess__hero`),
    tabs = body.querySelectorAll(`.clasess__pick__warrior_img`),
    mobileBurger = body.querySelector(`.mobile__icon`),
    mobileMenu = body.querySelector(`.mobile__menu`),
    mobileBurgerClose = body.querySelector(`.mobile__menu__close`),
    mobileLink = body.querySelectorAll(`.mobile__menu__items a`);

  mobileBurger.addEventListener(`click`, (e) => {
      e.preventDefault();
      mobileBurger.classList.add(`d-n`);
      body.classList.add(`overlay`);
      mobileMenu.classList.add(`mobile__menu__active`);
      
  });

  mobileBurgerClose.addEventListener(`click`, (e) => {
    mobileBurger.classList.remove(`d-n`);
    body.classList.remove(`overlay`);
    mobileMenu.classList.remove(`mobile__menu__active`);
    
  });

  
  modalButton.addEventListener(`click`, (e) => {
    e.preventDefault();
    body.classList.add(`overlay`);
    modal.classList.add(`modal__active`);

  });

  modalClose.addEventListener(`click`, (e) => {
    body.classList.remove(`overlay`);
    modal.classList.remove(`modal__active`);

  });

  mobileLink.forEach((item) => {
    item.addEventListener(`click`, () =>{
      body.classList.remove(`overlay`);
      mobileMenu.classList.remove(`mobile__menu__active`);
      mobileBurger.classList.remove(`d-n`);
    });
  });

  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () {
      hideTab();
      this.classList.add('clasess__pick__warrior_img_active');
      tabContent[i].classList.remove('hideTab');
      tabContent[i].classList.add('showTab');
    });
  });

  function hideTab() {
    tabs.forEach((item) => {
      item.classList.remove('clasess__pick__warrior_img_active');
    });
    tabContent.forEach((item) => {
      item.classList.add('hideTab');
      item.classList.remove('showTab');
    });
  }

  //Скрипт для плавного скролла по якорям
  // собираем все якоря; устанавливаем время анимации и количество кадров
  const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
    animationTime = 600,
    framesCount = 120;

  anchors.forEach(function (item) {
    // каждому якорю присваиваем обработчик события
    item.addEventListener('click', function (e) {
      // убираем стандартное поведение
      e.preventDefault();

      // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
      let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

      // запускаем интервал, в котором
      let scroller = setInterval(function () {
        // считаем на сколько скроллить за 1 такт
        let scrollBy = coordY / framesCount;

        // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
        // и дно страницы не достигнуто
        if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
          // то скроллим на к-во пикселей, которое соответствует одному такту
          window.scrollBy(0, scrollBy);
        } else {
          // иначе добираемся до элемента и выходим из интервала
          window.scrollTo(0, coordY);
          clearInterval(scroller);
        }
        // время интервала равняется частному от времени анимации и к-ва кадров
      }, animationTime / framesCount);
    });
  });

  let textOne = document.documentElement.clientWidth;
  if (textOne < 767){
    const rigthText = document.querySelectorAll(`.game-text__rigth-descr p`);
    const leftText = document.querySelector(`.game-text__left-descr p`);
    rigthText.forEach(item => {
      item.textContent = "John draw real poor on call my from. May she mrs furnished discourse extremely. Ask doubt noisy shade guest did builther him. Ignorant repeated hastened it do.";
    });
    leftText.textContent = "John draw real poor on call my from. May she mrs furnished discourse extremely. Ask doubt noisy shade guest did builther him. Ignorant repeated hastened it do.";
  }
  let textWidthTwo = document.documentElement.clientWidth;
  if (textWidthTwo < 575){
    const textTwo = document.querySelectorAll(`.game-story__descr`);
    textTwo.forEach(item => {
      item.textContent = "John draw real poor on call my John draw real poor John draw real poor on call my John draw real poor John draw real poor John draw real poor John draw real poor John draw real poor John draw real poor John draw real poor John draw real poor John draw real poor John draw real poor John draw real poor John draw real poor John draw real poor";
    });
    
  }
});