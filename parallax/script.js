$(document.body).on('click', 'a[href*="#"]', function(e) {
  e.preventDefault();
  $('html,body').animate({
    scrollTop: $(this.hash).offset().top
  }, 900);
});

$(window).on('scroll', function() {
  var scrolled = $(window).scrollTop();
  var height = $(window).height();
  if (scrolled < height) {
    $('.full-image').css({
      'top': -scrolled * .5
    });
  }
});