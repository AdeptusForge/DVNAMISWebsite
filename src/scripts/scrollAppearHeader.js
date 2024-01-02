$(window).scroll(function(){
  if ($(this).scrollTop() > 50) {
     $('#invisibleheader').addClass('totallyvisible');
  } else {
     $('#invisibleheader').removeClass('totallyvisible');
  }
});