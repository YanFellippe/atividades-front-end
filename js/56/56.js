const divFundo = document.querySelector('.fundo-alternavel');
const btn = document.querySelector('.btn')

function mudarCorFundo() {
    if(divFundo.style.backgroundColor === 'blue'){
        divFundo.style.backgroundColor = 'white';
    } else
    {
        divFundo.style.backgroundColor = 'blue';
    }
}

document.querySelector('#mudarCorFundo').onclick = mudarCorFundo;
