document.getElementById('cadastroForm').addEventListener('submit', function (event) {
  event.preventDefault();
  // Pegar elementos do HTML
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const lista = document.getElementById('listaUsuarios');
  const item = document.createElement('li');
  const division = document.createElement('separator');
  
  // Textos que serão inseridos no formulário
  item.textContent = `Nome: ${nome} | Email: ${email} | Telefone: ${telefone}`;
  division.textContent = "____________________________________________";
  lista.appendChild(item);
  lista.appendChild(division);

  // Limpar formulário
  document.getElementById('cadastroForm').reset();
});
