document.addEventListener('DOMContentLoaded', function() {
//   let timerId = setInterval(() => alert('tick'), 2000);
//
// остановить вывод через 5 секунд
// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 6000);
const img = document.getElementById('img');
const images = ['./img/spring.webp',
'./img/summer.webp',
'./img/autumn.webp',
'./img/snow.webp',]
let current = -1
//   function sayHi() {
//     alert('Привет');
//   }
// function switchToSpring() {
//  img.src = './img/spring.webp'
// }
// function switchToSummer() {
//  img.src = './img/summer.webp'
// }
// function switchToAutumn() {
//  box.src = './img/autumn.webp'
// }
// function switchToSnow() {
//  box.src = './img/snow.webp'
// }
// let spring = setTimeout(switchToSpring, 1000);
// let summer = setTimeout(switchToSummer, 2000);
// let autumn = setTimeout(switchToAutumn, 3000);
// let snow = setTimeout(switchToSnow, 4000);

addEventListener
setInterval(() => {
  current = (current+1) % images.length
  img.src = images[current]
}, 1000)

});
