let btn = document.getElementById('btn');
btn.addEventListener('click', cadastro);

function cadastro(){
    let nome =document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let cpf = document.getElementById('cpf').value;
    let endereco = document.getElementById('endereco').value;
    let complemento = document.getElementById('complemento').value
    let uf = document.getElementById('uf').value;
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = `Bem vindo <strong>${nome}</strong>.  
    Email: <strong>${email}</strong>  
    CPF:<strong>${cpf}</strong>  
    Endereco: ${endereco} - Complemento: <strong>${complemento}</strong> - UF: <strong>${uf}</strong>`;
}