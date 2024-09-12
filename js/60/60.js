const titulo = document.querySelector('#titulo');
const btn = document.querySelector('#btn');
let font = 100; 
btn.addEventListener('click', function() {
    font -= 4;
    titulo.style.fontSize = font + 'px';
});