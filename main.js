const form = document.getElementById("form-agenda");

const nomesContatos = [];
const numerosContatos = [];

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionarLinha();
  atualizarTabela();
  atualizarQuantidadeContatos();
});

function adicionarLinha() {
  const inputNomeContato = document.getElementById("nome-contato");
  const inputNumeroContato = document.getElementById("numero-contato");

  if (numerosContatos.includes(inputNumeroContato.value)) {
    alert(`O telefone de contato: ${inputNomeContato.value} já foi inserido`);
  } else {
    nomesContatos.push(inputNomeContato.value);
    numerosContatos.push(inputNumeroContato.value);

    let linha = "<tr>";
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
  }

  inputNomeContato.value = "";
  inputNumeroContato.value = "";
}

function atualizarTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}

function atualizarQuantidadeContatos(){
  const corpoTFooter = document.querySelector("tfoot");
  let linhaSomaContatos = "<tr>";
    linhaSomaContatos += `<td class="txt-qtd">Quantidade de contatos:</td>`;
    linhaSomaContatos += `<td class="qtd-contatos">(${numerosContatos.length})</td>`;
    linhaSomaContatos += `</tr>`;

  corpoTFooter.innerHTML = linhaSomaContatos;
}

