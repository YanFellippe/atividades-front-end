const texto = document.querySelector("#texto");
//Seleciona o botão que será clicado
const botao = document.querySelector("#botao");

//add um evento ao clicar no botão
botao.addEventListener("click", function teste(){
    //verificador para texto visível ou não
    if(texto.style.display === "block"){
        texto.style.display = "none";
    } else{
        texto.style.display = "block";
    }
} );
 