var range = 1 / 1600;
var vw = range * window.innerWidth;
var vh = range * window.innerHeight;

document.documentElement.style.setProperty('--vw-scale', `${vw}`);

window.addEventListener('resize', () => {
  document.documentElement.style.setProperty('--vw-scale', `${range * window.innerWidth}`);
});
window.addEventListener('resize', () => {
  document.documentElement.style.setProperty('--vh-scale', `${range * window.innerHeight}`);
});


var bodyRect = document.body.getBoundingClientRect(),
    elemRect = document.documentElement.getBoundingClientRect(),
    offset   = elemRect.top - bodyRect.top;

console.log('Element is ' + offset + ' vertical pixels from <body>');