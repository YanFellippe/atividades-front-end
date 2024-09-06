function alteraCor(){
        let elemento = document.querySelector(".minhaClasse");
        if(elemento.style.color === 'black'){
                elemento.style.color = 'red';
        } else {
                elemento.style.color = 'black';   
        }
}