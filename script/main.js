// top button
$(window).scroll(() => {
  if ($(window).scrollTop() > 200) {
    $('.btn-top').fadeIn();
  } else {
    $('.btn-top').fadeOut();
  }
});

$('.btn-top').click(() => {
  $(window).scrollTop(0);
});