const vrum = document.querySelector('#vrum');
const btn = document.querySelector('#btn');
let position = 'left';

btn.addEventListener('click', function () {
    if (position === 'left') {
        vrum.style.left = '50%'; 
        vrum.style.transform = 'translateX(-50%)'; 
        position = 'center';
    } else if (position === 'center') {
        vrum.style.left = 'calc(100% - 100px)'; 
        position = 'right';
    } else {
        vrum.style.left = '0'; 
        position = 'left';
    }
});
