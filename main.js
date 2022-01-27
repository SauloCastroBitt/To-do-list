// temos que referenciar o input

let input = document.querySelector('input[name=tarefa]');

// temos que referenciar o button

let btn = document.querySelector('#botao');

// temos que referenciar a lista

let lista = document.querySelector('#lista');

//card

let card = document.querySelector('.card');

let tarefas = [
  'Jogar GTA4',

  'Estudar Python',

  'Estudar Javascript',

  'Ver um filme',

  'Ler um livro',
];

function renderizarTarefas() {
  // limpar a listagem de itens antes de renderizar novamente a tela

  lista.innerHTML = '';

  for (tarefa of tarefas) {
    console.log(tarefa);

    // criar o item da lista

    let itemLista = document.createElement('li');

    //adicionar classes no item da lista

    itemLista.setAttribute('class', 'list-group-item list-group-item-action');

    //adicionar evento de clique no item da lista

    itemLista.onclick = function () {
      deletarTarefa(this);
    };

    //crair um texto

    let itemTexto = document.createTextNode(tarefa);

    //adicionar o texto no item da lista

    itemLista.appendChild(itemTexto);

    // adicionar o item da lista na lista

    lista.appendChild(itemLista);
  }
}

renderizarTarefas();

// precisamos escutar o evento de clique no botao

btn.onclick = function () {
  //precisamos capturar o valor digitado pelo usuario no input

  let novaTarefa = input.value;

  if (novaTarefa !== '') {
    //precisamos atualizar a nova tarefa na lista (array) de tarefas e renderizar a tela

    tarefas.push(novaTarefa);

    //executando a funcao para renderizar as tarefas

    renderizarTarefas();

    // limpar input

    input.value = '';

    // limpar mensagens de erro

    removerSpans();
  } else {
    removerSpans();

    let span = document.createElement('span');

    span.setAttribute('class', 'alert alert-warning');

    let msg = document.createTextNode('Voce precisa informar a tarefa!');

    span.appendChild(msg);

    card.appendChild(span);
  }
};

function removerSpans() {
  let spans = document.querySelectorAll('span');

  for (let i = 0; i < spans.length; i++) {
    card.removeChild(spans[i]);
  }
}

function deletarTarefa(tar) {
  // remove a tarefa do array

  tarefas.splice(tarefas.indexOf(tar.texContent), 1);

  //renderizar novamente a tela

  renderizarTarefas();
}

function salvasrDadosNoStorage() {
  // todo navegador web possui esta capacidade

  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}
