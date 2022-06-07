document.addEventListener(`DOMContentLoaded`, () => {
  //получаем элементы со страницы
  const menu = document.querySelector(`.mobile-menu`),
        burger = document.querySelector(`.mobile-burger`);
        // fixedBar = document.querySelector('.fixed-bar');
        //получаем ширину окна браузера и если при большей ширине используем скрипт
        // let doFullpage = document.documentElement.clientWidth;
        // if (doFullpage > 990){
        //   const toggleBar = function () {
        //     let isShown = window.pageYOffset > 50 ;
        //     fixedBar.classList.toggle('isShown', isShown);
            
        //   };
          
        //   toggleBar();
        //   window.addEventListener('scroll', toggleBar);
        // }
    //Скрипт прелоадера
    window.onload = function () {
      document.body.classList.add('loaded_hiding');
      window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
      }, 500);
    };
    //Скрипт для плавного скролла по якорям
    const anchors = document.querySelectorAll('a[href^="#"]')

    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const blockID = anchor.getAttribute('href');
        
        document.querySelector(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    };
    
    //Скрипт для мобильного меню
    function mobileNavbar(menu, burger){
      burger.addEventListener(`click`, () =>{
        burger.classList.toggle(`mobile-burger__active`);
        menu.classList.toggle(`mobile-menu__active`);
      });
    }
    //Создаем прогресс бар в блоке About
    let lineBar = new ProgressBar.Line("#line-containerOne", {
      strokeWidth: 1.5,
      trailWidth: 1.5,
      trailColor: "rgba(100,111,135,0.11)",
      from: { color: "#00a78e" },
      to: { color: "#00a78e" },
      svgStyle: {
        borderRadius: '5px',
    },
      text: {
        value: '0',
        className: 'progress-text',
        style: {
          color: '#646f87',
          position: 'absolute',
          fontzice: '14px',
          top: '-30px',
          right: '-5px',
          padding: 0,
          margin: 0,
          transform: null
        }
      },
      step: (state, shape) => {
        shape.path.setAttribute("stroke", state.color);
        shape.setText(Math.round(shape.value() * 100) + ' %');
      }
    });
     
    

    let lineBarTwo = new ProgressBar.Line("#line-containerTwo", {
      strokeWidth: 1.5,
      trailWidth: 1.5,
      trailColor: "rgba(100,111,135,0.11)",
      from: { color: "#00a78e" },
      to: { color: "#00a78e" },
      svgStyle: {
        borderRadius: '5px',
    },
      text: {
        value: '0',
        className: 'progress-text',
        style: {
          color: '#646f87',
          position: 'absolute',
          fontzice: '14px',
          top: '-30px',
          right: '-5px',
          padding: 0,
          margin: 0,
          transform: null
        }
      },
      step: (state, shape) => {
        shape.path.setAttribute("stroke", state.color);
        shape.setText(Math.round(shape.value() * 100) + ' %');
      }
    });
     
    

    let lineBarThree = new ProgressBar.Line("#line-containerThree", {
      strokeWidth: 1.5,
      trailWidth: 1.5,
      trailColor: "rgba(100,111,135,0.11)",
      from: { color: "#00a78e" },
      to: { color: "#00a78e" },
      svgStyle: {
        borderRadius: '5px',
    },
      text: {
        value: '0',
        className: 'progress-text',
        style: {
          color: '#646f87',
          position: 'absolute',
          fontzice: '14px',
          top: '-30px',
          right: '-5px',
          padding: 0,
          margin: 0,
          transform: null
        }
      },
      step: (state, shape) => {
        shape.path.setAttribute("stroke", state.color);
        shape.setText(Math.round(shape.value() * 100) + ' %');
      }
    });
     
    

    let lineBarFour = new ProgressBar.Line("#line-containerFour", {
      strokeWidth: 1.5,
      trailWidth: 1.5,
      trailColor: "rgba(100,111,135,0.11)",
      from: { color: "#00a78e" },
      to: { color: "#00a78e" },
      svgStyle: {
        borderRadius: '5px',
    },
      text: {
        value: '0',
        className: 'progress-text',
        style: {
          color: '#646f87',
          position: 'absolute',
          fontzice: '14px',
          top: '-30px',
          right: '-5px',
          padding: 0,
          margin: 0,
          transform: null
        }
      },
      step: (state, shape) => {
        shape.path.setAttribute("stroke", state.color);
        shape.setText(Math.round(shape.value() * 100) + ' %');
      }
    });
     
    

    

    
    
    //Используем как только пользователь дошел до элемента (прогресс бар)
    let waypoint = new Waypoint({
      element: document.getElementById('basic-waypoint'),
      handler: function(){
        lineBar.animate(0.85, {
          duration: 3000
        });

        lineBarTwo.animate(0.75, {
          duration: 3000
        });

        lineBarThree.animate(0.90, {
          duration: 3000
        });

        lineBarFour.animate(0.65, {
          duration: 3000
        });

      }
    });
    
    function outNum(num, elem) {
      const time = 2000;
      const step = 1;
      let e = document.querySelector(elem);
      let n = 0;
      let t = Math.round(time / (num / step));
      let interval = setInterval(() => {
        n = n + step;
        if (n == num) {
          clearInterval(interval);
        }
        e.innerHTML = n;
      }, t);
    }
    let waypointTwo = new Waypoint({
      element: document.getElementById('basic-waypointTwo'),
      handler: function(){
        outNum(125, "#project");
        outNum(70, "#client");
        outNum(15, "#activeproject");
        outNum(5, "#years");
         
         
      }
    });


    //Инициализируем слайдер в 3 блоке
    const swiper = new Swiper('.swiper-one', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      centerSlides: true,
      watchOverflow: true,
      centeredSlides: true,
      slidesPerGroup: 1,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          centerSlides: true,
          slidesPerView: 2,
          spaceBetween: 20
        },
        992:{
          slidesPerView: 3,
          spaceBetween: 30
        },
      },
      
      });

      const swiperTwo = new Swiper('.swiper-two', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 2,
        watchOverflow: true,
        slidesPerGroup: 1,
        spaceBetween: 30,
         // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          576: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          992: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 30
          }
        }


        
        });


        //Вызываем наши функции
        mobileNavbar(menu,burger);
});