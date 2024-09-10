function mudaTxt(){
    const texto = document.querySelector('.texto');
    const btn = document.querySelector('.btn');

    texto.innerText = 'Você clicou no botão!';
    btn.innerText = 'Obrigado por Clicar';
}

document.querySelector('#mudaTxt').onclick = mudaTxt;