async function retorno(){
    const response = await fetch('https://fakestoreapi.com/products');
    const conteudo = await response.json();
    lista_Produtos(conteudo)
}



retorno()
function lista_Produtos(produtos){
    let saida = '';

    for (let produto of produtos){
        let titulo = produto.title;
        if (produto.title.length > 66){
            titulo = produto.title.substring(0, 66) + "...";
        }
        console.log(produto.category);
        saida += `
    <div class="div-produtos" >
        <div id="divimagem"><img class="img-produtos" src=${produto.image} alt="imagem"/></div>
        <p class="preco_anterior">R$ ${produto.price * 2} </p>
        <p class="desconto">50% OFF</p>
        <p class="preco">R$ ${produto.price} </p>
        <img class="avaliacao_img" src="icons8-cinco-dos-cinco-100.png" alt="">
        <p class="titulo-produto" >${titulo}</p>
        <p class="titulo-categoria">Categoria: ${produto.category}</p>
    </div>`
    }

    document.getElementById('lista-Geral').innerHTML = saida
}

const searchInput = document.getElementById('pesquisa');
        searchInput.addEventListener('input', function() {
            const searchTerm = searchInput.value.toLowerCase();
            const produtos = document.querySelectorAll('.div-produtos');
            produtos.forEach(function(produto) {
                const titulo = produto.querySelector('.titulo-produto').textContent.toLowerCase();
                if (titulo.includes(searchTerm)) {
                    produto.style.display = 'block';
                } else {
                    produto.style.display = 'none';
                }
            });
        });

const filtroCategoria = document.getElementById('filtroCategoria');
filtroCategoria.addEventListener('change', function() {
    const categoriaSelecionada = filtroCategoria.value.toLowerCase();
    const produtos = document.querySelectorAll('.div-produtos');
    produtos.forEach(function(produto) {
        const categoriaProduto = produto.querySelector('.titulo-categoria').textContent.toLowerCase().replace('categoria: ', '');
        if (categoriaSelecionada === '' || categoriaProduto === categoriaSelecionada) {
            produto.style.display = 'block';
        } else {
            produto.style.display = 'none';
        }
    });
});
