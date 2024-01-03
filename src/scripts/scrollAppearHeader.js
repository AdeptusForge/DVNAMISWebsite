
function revealheader(){
  if ($(this).scrollTop() > 50) {
     $('#invisibleheader').addClass('totallyvisible');
  } else {
     $('#invisibleheader').removeClass('totallyvisible');
  }
};

addEventListener("scroll", (event) => {revealheader()});



onscroll = (event) => 
{
  if ($(this).scrollTop() > 50) {
    $('#invisibleheader').addClass('totallyvisible');
 } else {
    $('#invisibleheader').removeClass('totallyvisible');
 }
};


$(window).scroll(function(){
  if ($(this).scrollTop() > 50) {
     $('#invisibleheader').addClass('totallyvisible');
  } else {
     $('#invisibleheader').removeClass('totallyvisible');
  }
});