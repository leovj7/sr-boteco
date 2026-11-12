// ===== DADOS DO CARDÁPIO =====
 const categorias = [
  { id: "todos", nome: "✨ Todos" },
  { id: "espetos", nome: "🍢 Espetos" },
  { id: "porcoes", nome: "🍟 Porções" },
  { id: "bebidas", nome: "🍹 Bebidas" },
  { id: "sobremesas", nome: "🍰 Sobremesas" },
];

const itens = [
  { id: 1, categoria: "espetos", nome: "Espeto de Alcatra", descricao: "Corte macio, grelhado na brasa com sal grosso.", preco: 12, destaque: true },
  { id: 2, categoria: "espetos", nome: "Espeto de Frango", descricao: "Peito de frango marinado com ervas.", preco: 9 },
    { id: 3, categoria: "espetos", nome: "Espeto de Coracao ave", descricao: "Preservado com temperos únicos.", preco: 9 },
  { id: 4, categoria: "espetos", nome: "Espeto de coracao bovino ", descricao: "Coaracao marinado com ervas.", preco: 9 },
  { id: 5, categoria: "espetos", nome: "Espeto de queijo coaclho", descricao: "Exelente marcas e qualidade.", preco: 9 },
  { id: 6, categoria: "espetos", nome: "Espeto de queijo coalho com melaço", descricao: "Perfeito para os amantes de sabores intensos.", preco: 9 },
  { id: 7, categoria: "espetos", nome: "Espeto de cafta", descricao: "Corta de carne bovina, grelhada na brasa.", preco: 9 },
  { id: 8, categoria: "espetos", nome: "Espeto de cupim", descricao: "Corta de carne bovina, grelhada na brasa.", preco: 9 },

  { id: 9, categoria: "espetos", nome: "Espeto de porco", descricao: "Com a suculencia inconfundível.", preco: 10 },
  { id: 10, categoria: "porcoes", nome: "Mandioca Frita", descricao: "Crocante por fora, macia por dentro.", preco: 22, destaque: true },
    { id: 11, categoria: "porcoes", nome: "Batata Frita", descricao: "Crocante por fora, macia por dentro.", preco: 22, destaque: true },
  { id: 12, categoria: "porcoes", nome: "Calabresa acebolada", descricao: "ebola e temperos.", preco: 14 },
  { id: 13, categoria: "bebidas", nome: "Cerveja Long Neck", descricao: "Bem gelada.", preco: 9 },

    { id: 14, categoria: "bebidas", nome: "Taça de vinho", descricao: "Tinto.", preco: 9 },
  { id: 15, categoria: "bebidas", nome: "Mojito", descricao: "Bem gelada.", preco: 9 },
  { id: 16, categoria: "bebidas", nome: "Moscow Mule", descricao: "Vodka.", preco: 9 },
  { id: 17, categoria: "bebidas", nome: "Gin Tônica", descricao: "Gin Tanqueray.", preco: 9 },
  { id: 18, categoria: "bebidas", nome: "Aperol spritz", descricao: "Tequila", preco: 9 },
  { id: 19, categoria: "bebidas", nome: "Pina Colada", descricao: "Rum.", preco: 9 },
    { id: 20, categoria: "bebidas", nome: "Negroni", descricao: "Campari.", preco: 9 },
        { id: 21, categoria: "bebidas", nome: "Sangria", descricao: "Campari.", preco: 9 },



  { id: 22, categoria: "bebidas", nome: "limonada suiça", descricao: "Sem álcool.", preco: 6 },
    { id: 23, categoria: "bebidas", nome: "Soda Italiana ", descricao: "Sem álcool.", preco: 6 },
        { id: 24, categoria: "bebidas", nome: "Shirley Temple ", descricao: "Sem álcool.", preco: 6 },
  { id: 25, categoria: "sobremesas", nome: "Pudim de Leite", descricao: "Cremoso, com calda de caramelo.", preco: 12 },
  { id: 26, categoria: "sobremesas", nome: "Sorvete com Calda", descricao: "Duas bolas, calda à escolha.", preco: 10 },
    { id: 27, categoria: "sobremesas", nome: "Sorvete com Calda", descricao: "Duas bolas, calda à escolha.", preco: 10 },

];

// ===== COMBOS =====
 const combos = [
  {
    id: 1,
    nome: "Combo Boteco",
    emojis: "🍢🍢🍢🍟🥤",
    preco: 52,
    itens: [
      { id: 1, qtd: 3 },
      { id: 4, qtd: 1 },
      { id: 7, qtd: 1 },
    ],
  },
  {
    id: 2,
    nome: "Combo Casal",
    emojis: "🍢🍢🧀🍺🍺",
    preco: 59,
    itens: [
      { id: 1, qtd: 2 },
      { id: 2, qtd: 2 },
      { id: 3, qtd: 1 },
      { id: 6, qtd: 2 },
    ],
  },
  {
    id: 3,
    nome: "Combo Galera",
    emojis: "🍢🍢🍢🍟🍺🍺",
    preco: 105,
    itens: [
      { id: 1, qtd: 3 },
      { id: 2, qtd: 3 },
      { id: 4, qtd: 1 },
      { id: 5, qtd: 1 },
      { id: 6, qtd: 3 },
    ],

  },
];

// ===== DESTAQUE DO CHEFE (card no topo do cardápio) =====
const destaque = {
  itemId: 1, // id do prato em "itens" (1 = Espeto de Alcatra)
  titulo: "Escolha do Sr Boteco",
  texto: "Nosso espeto mais pedido: macio por dentro, selado na grelha por fora.",
  ingredientes: ["Alcatra", "Sal grosso", "Brasa de carvão", "Farofa da casa"],
  imagem: "assets/images/espeto-principal.webp", // ajuste o nome e a extensão do seu arquivo
};