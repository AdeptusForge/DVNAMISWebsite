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