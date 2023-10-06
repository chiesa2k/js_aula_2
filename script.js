// Referência dos elementos html com JavaScript
const titulo = document.getElementById("titulo");
const listaOrdenada = document.getElementById("lista-ordenada");
const listaNaoOrdenada = document.getElementById("ul");

// Adicionanddo conteúdo aos elementos h1 
titulo.innerText = "Título da Página";
const link = document.querySelector("a");
link.innerText = "Visite nosso site";
link.href = "https://prozeducacao.com.br";

// Adicionar três itens simples na lista não ordenada
const itensNaoOrdenados = ["Item 1", "Item 2", "Item 3"];
itensNaoOrdenados.forEach((item texto) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = itemTexto;
    listaNaoOrdenada.appendChild(listItem);
});

// Adicionar os três itens com links para outros sites
const itensOrdenados = [
    '<a href="https://site1.com">site1</a>'
    '<a href="https://site2.com">site2</a>'
    '<a href="https://site3.com">site3</a>'
];
itensOrdenados.forEach((itemHTML) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = itemHTML;
    listaOrdenada.appendChild(listItem);
});