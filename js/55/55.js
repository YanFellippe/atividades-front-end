function mudaTxt(){
    const texto = document.querySelector('.texto');
    const btn = document.querySelector('.btn');

    texto.textContent = 'Você clicou no botão!';
    btn.textContent = 'Obrigado por Clicar';
}

document.querySelector('#mudaTxt').onclick = mudaTxt;