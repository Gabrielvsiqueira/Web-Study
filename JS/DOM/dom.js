/// Ex 1 - Clicar no botão e trocar o texto do parágrafo

document.getElementById('changeButton').addEventListener('click', function () {
  document.getElementById('textSection').innerText = 'Novo conteudo do texto';
})