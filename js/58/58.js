const btn = document.querySelector('#btn');
const titulo = document.querySelector('#titulo');
const btn2 = document.querySelector('#btn2');
let font = 26;

btn.addEventListener('click', function() {
    font += 2;
    titulo.style.fontSize = font + 'px';
});

btn2.addEventListener('click', function() {
    font -= 2;
    titulo.style.fontSize = font + 'px';
});

