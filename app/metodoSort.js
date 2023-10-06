const btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
    const livrosOrdenados = livros.toSorted((a, b) => a.preco - b.preco);   // ou .sort()
    exibirLivrosNaTela(livrosOrdenados);
}