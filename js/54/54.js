    
    //função que altera o css no click
    function mudaCSS(){
        const caixa = document.querySelector('.caixa');
        //adiciona a classe nova 'caixa-ativa' 
        caixa.classList.add('caixa-ativa');
    }
    //chama a função que altera o css ao clicar no botão
    document.querySelector('#mudaCSS').onclick = mudaCSS;