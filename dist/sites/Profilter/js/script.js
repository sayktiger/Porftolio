document.addEventListener(`DOMContentLoaded`, () => {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    speed: 1000,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    allowTouchMove: true,
    autoHeight: 'auto',
    slidesPerView: 1,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
  });

  const swiperTwo = new Swiper('.swiperTwo', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    slidesPerView: 1,
    // If we need pagination
    pagination: {
      type: 'fraction',
      el: '.swiper-paginationTwo',
      formatFractionCurrent: function (number) {
        if (number < 10) {
          return '0' + number;
        } else {
          return number;
        }


      },
    },
    navigation: {
      nextEl: '.about__products__arrows_right',
      prevEl: '.about__products__arrows_left',
    },
  });

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


  const linkModal = document.querySelectorAll(`.modal__click`),
    modal = document.querySelector(`.modal`),
    closeModal = document.querySelector(`.modal__close`),
    body = document.querySelector(`body`);


    
    linkModal.forEach((item) => {
      item.addEventListener(`click`, (e) =>{

       modal.classList.add(`modal__active`);
     });
   });

    closeModal.addEventListener(`click`, (e)=>{
      e.preventDefault();

      modal.classList.remove(`modal__active`);
    });

    const mobileMenu = document.querySelector(`.mobile-menu`),
      burger = document.querySelector(`.hero__menu_burger`),
      mobileMenuClose = document.querySelector(`.mobile-menu__header_close`),
      mobileLink = document.querySelectorAll(`.mobile-link`);
    let doFullpage = document.documentElement.clientWidth;

    if (doFullpage < 1023){
      burger.addEventListener(`click`, (e) => {
        body.classList.add(`overlay-body`);
        mobileMenu.classList.add(`mobile-menu__active`);
      });
  
      mobileMenuClose.addEventListener(`click`, (e) => {
        body.classList.remove(`overlay-body`);
        mobileMenu.classList.remove(`mobile-menu__active`);
      });
  
      mobileLink.forEach((item) => {
        item.addEventListener(`click`, (e) =>{
  
        body.classList.remove(`overlay-body`);
        mobileMenu.classList.remove(`mobile-menu__active`);
       });
     });
    }

    
});