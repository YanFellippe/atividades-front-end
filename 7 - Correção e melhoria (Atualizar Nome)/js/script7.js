function atualizarNome() {
  // Pegar a variável pelo id e puxa-la
  let nome = document.getElementById('novoNome').value; 
  // Atualizar o texto no formulário
  document.getElementById('resultado').textContent = "Nome atual: " + nome;
}
