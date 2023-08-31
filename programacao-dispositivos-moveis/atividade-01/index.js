produtos = [
  {
    nome: "Feijão",
    preco: 7.00
  }, {
    nome: "Arroz",
    preco: 5.50
  }, {
    nome:"Macarrão",
    preco: 3.56
  }
];


function aumentarProdutos(){
  const produtos_preco_aumentado = produtos.map((produto, index) => {
    console.log(`ID: 00${index+1} - Produto: ${produto.nome} - Preço atual: ${produto.preco.toFixed(2)} - Preço com aumento: ${(produto.preco*1.50).toFixed(2)}`);
  })
}