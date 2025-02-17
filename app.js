let amigos = []


// Função para exibir texto na tela (lista de amigos)
function exibirTextoNaTela(tag, texto) {

    let campo = document.querySelector(tag);  //busca o elemento HTML tag.
    let novoItem = document.createElement('li'); // Cria um novo item de lista.
    novoItem.innerHTML = texto; // Adiciona o texto no item.
    campo.appendChild(novoItem); // Adiciona o item à lista.

}

// Função para adicionar um amigo na lista
function adicionarAmigo() {

    let inserirNome = document.getElementById('amigo').value; // Pega o valor do input.


    
        if (inserirNome == "") {
        alert("Você deve inserir um nome"); // verifica se o nome foi inserido. Se não, exibe um alerta.
      } 
      else {
       exibirTextoNaTela('ul', inserirNome); // Adiciona o nome como item de lista.
       document.getElementById("amigo"). value = ""; // Limpa o campo de entrada após adicionar.
       amigos.push(inserirNome);   // Armazena o nome inserido no array amigos.
       
  }
  
 
} 

// Função para sortear um único amigo secreto
function sortearAmigo() {
    
    
    if (amigos.length === 0) {
        alert("Não há nomes para sortear"); //Verifica se a lista de amigos está vazia. Se sim, exibe um alerta.
    }
    else {
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]; 

    let apagarLista = document.querySelector("ul"); // Apaga a lista do sorteio da tela
    apagarLista.innerHTML = "";
    
    let itemResultado = document.getElementById("resultado");  // Exibe o resultado do sorteio
    itemResultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`; 
    }
}


