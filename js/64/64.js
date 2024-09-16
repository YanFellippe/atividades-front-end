function formulario(){
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    let confirmarSenha = document.getElementById('confirmarSenha').value;

    if(nome === '' || email === '' || senha === '' || confirmarSenha === ''){
        alert('Todos os campos são obrigatórios!');
        return false;
    } else{
        alert('Usuário cadastrado com sucesso!')
    }
}