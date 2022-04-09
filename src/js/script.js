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


const lineBarOne = new ProgressBar.Line(".line-bar-1", {
    strokeWidth: 4,
    trailWidth: 4,
    from: { color: "#FFA501" },
    to: { color: "#FFA501" },
    text: {
      value: '0',
      className: 'progress-text',
      style: {
        color: 'black',
        position: 'absolute',
        right: '-7px',
        top: '-57px',
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

  const lineBarTwo = new ProgressBar.Line(".line-bar-2", {
    strokeWidth: 4,
    trailWidth: 4,
    from: { color: "#FFA501" },
    to: { color: "#FFA501" },
    text: {
      value: '0',
      className: 'progress-text',
      style: {
        color: 'black',
        position: 'absolute',
        right: '-7px',
        top: '-57px',
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

  const lineBarThee = new ProgressBar.Line(".line-bar-3", {
    strokeWidth: 4,
    trailWidth: 4,
    from: { color: "#FFA501" },
    to: { color: "#FFA501" },
    text: {
      value: '0',
      className: 'progress-text',
      style: {
        color: 'black',
        position: 'absolute',
        right: '-7px',
        top: '-57px',
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

  const lineBarFour = new ProgressBar.Line(".line-bar-4", {
    strokeWidth: 4,
    trailWidth: 4,
    from: { color: "#FFA501" },
    to: { color: "#FFA501" },
    text: {
      value: '0',
      className: 'progress-text',
      style: {
        color: 'black',
        position: 'absolute',
        right: '-7px',
        top: '-57px',
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

  const lineBarFive = new ProgressBar.Line(".line-bar-5", {
    strokeWidth: 4,
    trailWidth: 4,
    from: { color: "#FFA501" },
    to: { color: "#FFA501" },
    text: {
      value: '0',
      className: 'progress-text',
      style: {
        color: 'black',
        position: 'absolute',
        right: '-7px',
        top: '-57px',
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

  const lineBarSix = new ProgressBar.Line(".line-bar-6", {
    strokeWidth: 4,
    trailWidth: 4,
    from: { color: "#FFA501" },
    to: { color: "#FFA501" },
    text: {
      value: '0',
      className: 'progress-text',
      style: {
        color: 'black',
        position: 'absolute',
        right: '-7px',
        top: '-57px',
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
  
  
  
  let waypoint = new Waypoint({
    element: document.getElementById('basic-waypoint'),
    handler: function() {
        lineBarOne.animate(1, {
            duration: 1000
          });
          lineBarTwo.animate(.85, {
            duration: 1000
          });
          lineBarThee.animate(.90, {
            duration: 1000
          });
          lineBarFour.animate(.75, {
            duration: 1000
          });
          lineBarFive.animate(.90, {
            duration: 1000
          });
          lineBarSix.animate(.95, {
            duration: 1000
          });
    }
  });

});


