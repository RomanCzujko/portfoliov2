$(document).on('scroll', window, function () {
  if ($(window).scrollTop() < 400) {
    $('.main-nav').hide()
  } else {
    $('.main-nav').slideDown(700)
  }
})
$('.btn-cookies').on('click', function () {
  $('.cookies').hide('cookies')
})

// ------------ Медленные якоря-------------
$(document).ready(function () {
  $('#slowmenu').on('click', 'a', function (event) {
    event.preventDefault()
    let id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1500)
  })
})
$(document).ready(function () {
  $('#slowmenu2').on('click', 'a', function (event) {
    event.preventDefault()
    let id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1500)
  })
})
// $('#1 a').click(function (e) {
//   e.preventDefault()
//   $(this).tab('show')
// })
// $('#2 a').click(function (e) {
//   e.preventDefault()
//   $(this).tab('show')
// })
// $('#3 a').click(function (e) {
//   e.preventDefault()
//   $(this).tab('show')
// })
// $(document).ready(function () {
//   $('#slowmenu3').on('click', 'a', function (event) {
//     event.preventDefault()
//     let id = $(this).attr('href'),
//       top = $(id).offset().top
//     $('body,html').animate({ scrollTop: top }, 1500)
//   })
// })
$(document).ready(function () {
  $('#anchor').on('click', 'a', function (event) {
    event.preventDefault()
    let id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1500)
  })
})
// ------------------- SLIDER --------------
$(function () {
  $('.main-slider-websites1').slick({
    infinite: true,
    slidesToShow: 1,
    pauseOnHover: false,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
    arrows: true,
    appendArrows: $('.your-class-arrow1'),
    prevArrow: '<i class="fa fa-chevron-left" aria-hidden="true"></i> ',
    nextArrow: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
  })
  //   $(".main-slider").appendDots();
})
$(function () {
  $('.main-slider-websites2').slick({
    infinite: true,
    mobileFirst: true,
    slidesToShow: 1,
    pauseOnHover: false,
    fade: true,
    speed: 1000,
    autoplay: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
    arrows: true,
    appendArrows: $('.your-class-arrow2'),
    prevArrow: '<i class="fa fa-chevron-left" aria-hidden="true"></i> ',
    nextArrow: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
  })
  //   $(".main-slider").appendDots();
})

// ------------------- Отправка формы

$(document).ready(function () {
  $('#form').submit(function () {
    $.ajax({
      type: 'POST',
      url: 'send.php',
      data: $(this).serialize(),
    }).done(function () {
      $('.js-overlay-thank-you').fadeIn()
      $(this).find('input').val('')
      $('#form').trigger('reset')
    })
    return false
  })
})

/// -----------Закрыть попап «спасибо»

$('.js-close-thank-you').click(function () {
  // по клику на крестик
  $('.js-overlay-thank-you').fadeOut()
})

$(document).mouseup(function (e) {
  // по клику вне попапа
  var popup = $('.popup')
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $('.js-overlay-thank-you').fadeOut()
  }
})
