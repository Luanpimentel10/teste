// 1. variáveis para "pegar" o header e o botão do HTML
const capa = document.querySelector('header');
const botao = document.querySelector('.botao');

// 2. Dizemos para o navegador "escutar" quando o botão for clicado
botao.addEventListener('click', () => {
    
    // 3. Quando clicar, adicionamos a classe '.capa-sumir' no header
    capa.classList.add('capa-sumir');

});