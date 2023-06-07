const tarefa = document.querySelector(".conteudo")
const btn_adicionar = document.querySelector(".btnAdicionar")
const btn_feito = document.querySelector(".btnFeito")
const itensAdd = document.querySelector(".card_itens")
const caixa = document.querySelector(".itens")

atualizarLi()

btn_adicionar.addEventListener('click', function() {
  const elementos = caixa.querySelectorAll("li");
  const valor = tarefa.value.trim();

  if (!valor) {
    alert('A tarefa não pode ser vazia.');
  } else if (Array.from(elementos).some(elemento => elemento.textContent === valor) ){
    alert('Não pode ser a mesma tarefa.');
  } else {
    const novaTarefa = document.createElement('li');
    novaTarefa.textContent = valor;
    caixa.appendChild(novaTarefa);
    tarefa.value = '';
  }
});


itensAdd.addEventListener('click', atualizarLi)

function atualizarLi(){
    const elementosCaixa1 = itensAdd.querySelectorAll("li");
    elementosCaixa1.forEach((el) => {
        el.addEventListener("click", (evt) => {
        const tarefa = evt.target;
        tarefa.classList.toggle("selecionado");       
    });      
    });
}

btn_feito.addEventListener("click", ()=>{
    const elementosSelecionados = caixa.querySelectorAll(".selecionado");
    elementosSelecionados.forEach((el) => {
    caixa.removeChild(el);
  
})
})