$(document).ready(function(){
    $('.carousel__inner').slick({
            infinite: true,
            speed: 1200,
            prevArrow: '<button type="button" class="slick-prev"><img src="img/sliders/shift_left.svg"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="img/sliders/shift_rigth.svg"></button>',
            adaptiveHeight:true,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    arrows: false,
                    dots: true,
                    centerMode: true,
                    variableWidth: true,
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    arrows: false,
                    dots: true,
                    centerMode: true,
                    slidesToShow: 1,
                    variableWidth: true,
                  }
                }
              ]
          }
    );

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });


    function toggleSlide(item){
      $(item).each(function(i){
        $(this).on(`click`, function(e){
          e.preventDefault();
          $(`.catalog-item__content`).eq(i).toggleClass(`catalog-item__content_active`);
          $(`.catalog-item__list`).eq(i).toggleClass(`catalog-item__list_active`);
        });
      });
    };

    toggleSlide(`.catalog-item__link`);
    toggleSlide(`.catalog-item__back`);

    //Modal window
    $(`[data-modal=consultation]`).on(`click`, function(){
      $(`.overlay,#consultation`).fadeIn(`slow`);
      
    });
    $(`.modal__close`).on(`click`, function(){
      $(`.overlay,#consultation,#order,#thanks`).fadeOut(`slow`);
    });


    $(`.button_mini`).each(function(i){
      $(this).on(`click`, function(){
        $(`#order .modal__subtitle`).text($(`.catalog-item__subtitle`).eq(i).text());
        $(`.overlay,#order`).fadeIn(`slow`);
      })
    });
    

    function validateForms(form){
      $(form).validate({
        rules : {
          name: {
            required: true,
            minlength: 2
          },
          phone: `required`,
          email: {
          require: true,
          email: true
          }
        },
        messages: {
          name: {
            required: "Пожалуйста введите свое Имя",
            minlength: jQuery.validator.format("Введите {0} символа")
          },
          phone: "Пожалуйста введите свой номер",
          email: {
            required: "Пожалуйста введите свою почту",
            email: "Неправильно введен адрес почты"
          }
        }
      });
    }
    validateForms(`#consultation-form`);
    validateForms(`#consultation form`);
    validateForms(`#order form`);

    $(`input[name="phone"]`).mask("+7(999) 999-9999");

    $(`form`).submit(function(e){
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function(){
        $(this).find("input").val("");
        $(`#consultation, #order`).fadeOut();
        $(`.overlay, #thanks`).fadeIn();

        $(`form`).trigger(`reset`);
      });
      return false;
    });

    $('.scrollto a').on('click', function() {

      let href = $(this).attr('href="#up"');
  
      $('html, body').animate({
          scrollTop: $(href).offset().top
      }, {
          duration: 370,   // по умолчанию «400» 
          easing: "linear" // по умолчанию «swing» 
      });
  
      return false;
    });

    //Scroll up
    $(window).scroll(function(){
      if($(this).scrollTop()>1600){
        $(`.pageup`).fadeIn();
      }
      else{
        $(`.pageup`).fadeOut();
      }
    });

    $("a.pageup").on("click", function(e){
      e.preventDefault();
      var anchor = $(this).attr('href');
      $('html, body').stop().animate({
          scrollTop: $(anchor).offset().top
      }, 800);
  });
  new WOW().init();
  });