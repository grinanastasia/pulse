// var ;
// let;
// const ; переменные
// Number
// String строка
// true false
// null не существует элемент
// undefined  эл существует, но нет значения
// alert(1234) всплывает окно на странице
// let answer = confirm("Вам есть 18?");
// console.log(answer);

// let answer = prompt("Вам есть 18?", "");
// console.log(answer);

// let isChecked = true,
//   isClose = true;
// // console.log(isChecked && isClose); оператор И
// console.log(isChecked || isClose); оператор или

// if (2 * 43 == 8 * 1) {
//   console.log("Верно");
// } else {
// }
// console.log("ОШибка");

// let answer = confirm("Вам есть 18?");
// if (answer) {
//   console.log("Проходите");
// } else {
//   console.log("Уходи");
// }

// const num = 50;

// if (num < 49) {
//   console.log("Неправильно");
// } else if (num > 100) {
//   console.log("Много");
// } else {
//   console.log("Верно");
// }

// for (let i = 1; i < 8; i++) {
//   console.log(i);
// }

/* function logging(a, b) {
	console.log(a + b);
}

logging(3, 5); */

$(document).ready(function () {
  $(".carusel__inner").slick({
    speed: 1200,
    adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });

  $("ul.catalog__tabs").on(
    "click",
    "li:not(.catalog__tab_active)",
    function () {
      $(this)
        .addClass("catalog__tab_active")
        .siblings()
        .removeClass("catalog__tab_active")
        .closest("div.container")
        .find("div.catalog__content")
        .removeClass("catalog__content_active")
        .eq($(this).index())
        .addClass("catalog__content_active");
    }
  );

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalog-item__content")
          .eq(i)
          .toggleClass("catalog-item__content_active");
        $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
      });
    });
  }

  toggleSlide(".catalog-item__link");
  toggleSlide(".catalog-item__back");

  // Modal

  $("[data-modal=consultation]").on("click", function () {
    $(".overlay, #consultation").fadeIn("slow");
  });
  $(".modal__close").on("click", function () {
    $(".overlay, #consultation, #thanks, #order").fadeOut("slow");
  });

  $(".button_mini").each(function (i) {
    $(this).on("click", function () {
      $("#order .modal__descr").text($(".catalog-item__subtitle").eq(i).text());
      $(".overlay, #order").fadeIn("slow");
    });
  });

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        phone: "required",
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format("Введите {0} символа!"),
        },
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты",
        },
      },
    });
  }

  validateForms("#consultation-form");
  validateForms("#consultation form");
  validateForms("#order form");

  $("input[name=phone]").mask("+7 (999) 999-99-99");
});