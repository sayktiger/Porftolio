document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(`.main__menu__burger`),
          menu = document.querySelector(`.navbar`),
          close = document.querySelector (`.navbar__close`),
          line = document.querySelector('#line'),
          body = document.querySelector(`body`),
          bodyHeight = document.body.clientHeight,
          doc = document.documentElement;

    hamburger.addEventListener(`click`, () => {
        menu.classList.add(`navbar__active`),
        body.classList.add(`overflow-hidden`);
    });
        
    close.addEventListener(`click`, () => {
        body.classList.remove(`overflow-hidden`),
        menu.classList.remove(`navbar__active`); 
    });

    setTimeout(function() {
    setHeightLine();
    },1000);

    document.addEventListener('scroll', function() {
    setHeightLine();
    });

    document.addEventListener('resize', function() {
    setHeightLine();
    });

    function setHeightLine() {
    let scrollTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0),
        percent;
    scrollTop += doc.clientHeight;
    
    percent = scrollTop / bodyHeight * 60;
    line.style.height = percent + '%';
    }

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 2,
        spaceBetween: 38,
        centerSlides: true,
        watchOverflow: true,
        centeredSlides: true,
        grabCursor: false,
        allowTouchMove: false,
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next'
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: `auto`,
            spaceBetween: 0,
            centeredSlides: true,
            grabCursor: true,
            allowTouchMove: true,
          },
          // when window width is >= 480px
          577: {
            slidesPerView: `auto`,
            spaceBetween: 1,
            centeredSlides: true,
            grabCursor: true,
            allowTouchMove: true,
          },
          // when window width is >= 640px
          768: {
            slidesPerView: `auto`,
            spaceBetween: 10,
            grabCursor: true,
            allowTouchMove: true,
          },
          1024:{
            slidesPerView: 1.5,
            spaceBetween: 15,
            centerSlides: true,
          },
          1140:{
            slidesPerView: 2,
            spaceBetween: 38,
            centerSlides: true,
          },
          2560:{
            slidesPerView:'auto',
            spaceBetween: 40,
            centerSlides: true,
            watchOverflow: true,
            loopedSlides: 3,
            
          }
        }
        
      });

      const swiperTwo = new Swiper('.swiperTwo', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        watchOverflow: true,
        grabCursor: false,
        allowTouchMove: false,
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next'
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: `auto`,
            spaceBetween: 10,
            centeredSlides: true,
            grabCursor: true,
            allowTouchMove: true,
            slideToClickedSlide: true,
          },
          // when window width is >= 480px
          576: {
            slidesPerView: `auto`,
            spaceBetween: 40,
            grabCursor: true,
            allowTouchMove: true,
          },
          // when window width is >= 640px
          768: {
            slidesPerView: `auto`,
            grabCursor: true,
            allowTouchMove: true,
          },
        }
      });
    
});