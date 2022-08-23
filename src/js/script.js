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
    from: { color: "#d596f2" },
    to: { color: "#d596f2" },
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
    from: { color: "#d596f2" },
    to: { color: "#d596f2" },
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
    from: { color: "#d596f2" },
    to: { color: "#d596f2" },
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
    from: { color: "#d596f2" },
    to: { color: "#d596f2" },
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
    from: { color: "#d596f2" },
    to: { color: "#d596f2" },
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
    from: { color: "#d596f2" },
    to: { color: "#d596f2" },
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

  console.log(`Привет, если ты разработчик и тебе бы хотелось со мной поработать, на сайте есть ссылочки на контакты со мной. Пиши не стесняйся)`)
});
window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.tel'), function(input) {
  var keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

});


});


