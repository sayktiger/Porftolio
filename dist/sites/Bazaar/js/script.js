document.addEventListener("DOMContentLoaded", function() {


let doFullpage = document.documentElement.clientWidth;
if (doFullpage > 990) {
  jQuery(function($) {
    $('#myContainer').fullpage({
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      scrollHorizontally: true,
      navigation: false,
      paddingTop: '0px',
	    paddingBottom: '0px',
      responsiveWidth: 990,
      lazyLoading: false,
      css3: true,
      scrollOverflow: true,
      resetSliders: true,
    });
  });
}




const hamburger = document.querySelector(`.home-1__logo_burger`),
        menu = document.querySelector(`.menu`),
        close = document.querySelector (`.menu__logo_burger_close`),
        buttonOne = document.querySelectorAll(`.link-modal-1`),
        modalOne = document.querySelector(`.modal-1`),
        closeOneModal = document.querySelector (`.modal-1_close`),
        buttonTwo = document.querySelectorAll(`.link-modal-2`),
        modalTwo = document.querySelector(`.modal-2`),
        closeTwoModal = document.querySelector (`.modal-2_close`),
        buttonThree = document.querySelectorAll(`.link-modal-3`),
        modalThree = document.querySelector(`.modal-3`),
        closeThreeModal = document.querySelector (`.modal-3_close`),
        body = document.querySelector(`body`);


hamburger.addEventListener(`click`, () => {
  menu.classList.add(`menu__active`),
  body.classList.add(`overflow-hidden`);
});
  
close.addEventListener(`click`, () => {
  body.classList.remove(`overflow-hidden`),
  menu.classList.remove(`menu__active`); 
});

buttonOne.forEach(item => { 
  item.addEventListener(`click`, () => {
    modalOne.classList.add(`modal-1__active`),
    body.classList.add(`overflow-hidden`);
  });
});


closeOneModal.addEventListener(`click`, () => {
  body.classList.remove(`overflow-hidden`),
  modalOne.classList.remove(`modal-1__active`); 
});

buttonTwo.forEach(item => { 
  item.addEventListener(`click`, () => {
    modalTwo.classList.add(`modal-2__active`),
    body.classList.add(`overflow-hidden`);
  });
});


closeTwoModal.addEventListener(`click`, () => {
  body.classList.remove(`overflow-hidden`),
  modalTwo.classList.remove(`modal-2__active`); 
});

buttonThree.forEach(item => { 
  item.addEventListener(`click`, () => {
    modalThree.classList.add(`modal-3__active`),
    body.classList.add(`overflow-hidden`);
  });
});


closeThreeModal.addEventListener(`click`, () => {
  body.classList.remove(`overflow-hidden`),
  modalThree.classList.remove(`modal-3__active`); 
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides: false,
    slidesPerView: 3,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 79,
      },
      // when window width is >= 640px
      990: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    }
  
  });

  const swiperTwo = new Swiper('.swiperTwo', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: "auto",
    centeredSlides: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {

      320: {
        slidesPerView: "auto",
        spaceBetween: 20
      },

      768: {
        slidesPerView: "auto",
        spaceBetween: 10,
      },

      990: {
        slidesPerView: "auto",
      },
    }
  });

  const swiperCard = new Swiper('.swiperCard', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: "auto",
    centeredSlides: false,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination-card',
    },
    navigation: {
         nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
         },
});
  

(function($) {
    $(function() {
      
      $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });
      
    });
    })(jQuery);


});
