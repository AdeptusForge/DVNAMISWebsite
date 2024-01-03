var position = $('AbyssOfSand').offset().top - $(document).scrollTop();

$('AbyssOfSand').prop('--position', `${position}`);

window.addEventListener('resize', () => {
  $('AbyssOfSand').prop('--position', `${position}`);
});

window.addEventListener('scroll', () => {
  $('AbyssOfSand').prop('--position', `${position}`);
});