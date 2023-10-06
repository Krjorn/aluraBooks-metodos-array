const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    const livrosFiltrados = categoria === 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibirLivrosNaTela(livrosFiltrados);
    if(categoria === 'disponivel') {
        const valorTotal = calcularValorTotalLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalLivrosNaTela(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria === categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalLivrosNaTela(valorTotal) {
    valorTotal = formataPreco(valorTotal);
    sectionValorTotalLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por <span id="valor">${valorTotal}</span></p>
        </div>
    `;
}