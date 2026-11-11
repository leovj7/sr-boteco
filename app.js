// ===== LÓGICA DO CARDÁPIO (JavaScript puro) =====

// 1. Selecionar elementos do HTML
const telaBoasVindas = document.getElementById("welcome");
const telaCardapio = document.getElementById("cardapio");
const btnExplorar = document.getElementById("btn-explorar");
const mesaTag = document.getElementById("welcome-mesa");
const secaoDestaque = document.getElementById("destaque");
const inputBusca = document.getElementById("busca");
const secaoCombos = document.getElementById("combos");
const trilhoCombos = document.getElementById("combos-trilho"); // mesmo id do HTML
const tabs = document.getElementById("tabs");
const lista = document.getElementById("lista");
const vazio = document.getElementById("vazio");

const estado = {
  categoria: "todos",
  busca: "",
};

// 2. Leitura da mesa via URL (?mesa=5)
const mesa = new URLSearchParams(window.location.search).get("mesa");
if (mesa) {
  mesaTag.textContent = "Mesa " + mesa;
  mesaTag.hidden = false;
}

// 3. Funções de formatação e desenho
function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function desenharDestaque() {
  const prato = itens.find((i) => i.id === destaque.itemId);
  if (!prato) {
    secaoDestaque.hidden = true;
    return;
  }

  const foto = destaque.imagem
    ? `<img class="destaque__foto" src="${destaque.imagem}" alt="${prato.nome}" onerror="this.style.display='none'">`
    : "";

  const etiquetas = destaque.ingredientes
    .map((ing) => `<li class="destaque__chip">${ing}</li>`)
    .join("");

  secaoDestaque.innerHTML = `
    ${foto}
    <div class="destaque__corpo">
      <span class="destaque__tag">${destaque.titulo}</span>
      <h2 class="destaque__nome">${prato.nome}</h2>
      <p class="destaque__texto">${destaque.texto}</p>
      <ul class="destaque__ingredientes">${etiquetas}</ul>
      <span class="destaque__preco">${formatarPreco(prato.preco)}</span>
    </div>`;
}

function desenharCategorias() {
  tabs.innerHTML = categorias
    .map((c) => {
      const ativa = c.id === estado.categoria ? " tab--ativa" : "";
      return `<button class="tab${ativa}" data-categoria="${c.id}">${c.nome}</button>`;
    })
    .join("");
}

function desenharCombos() {
  if (!trilhoCombos) return;

  trilhoCombos.innerHTML = combos
    .map((combo) => {
      const linhas = combo.itens
        .map((c) => ({ prato: itens.find((i) => i.id === c.id), qtd: c.qtd }))
        .filter((l) => l.prato); // ignora ids que não existem

      const precoOriginal = linhas.reduce((t, l) => t + l.prato.preco * l.qtd, 0);
      const economia = precoOriginal - combo.preco;
      const descricao = linhas.map((l) => `${l.qtd}x ${l.prato.nome}`).join(" · ");

      const midia = combo.imagem
        ? `<img class="combo__foto" src="${combo.imagem}" alt="${combo.nome}" onerror="this.style.display='none'">`
        : `<div class="combo__emojis" aria-hidden="true">${combo.emojis}</div>`;

      return `
        <article class="combo">
          <span class="combo__selo">Economize ${formatarPreco(economia)}</span>
          ${midia}
          <h3 class="combo__nome">${combo.nome}</h3>
          <p class="combo__itens">${descricao}</p>
          <div class="combo__precos">
            <span class="combo__de">${formatarPreco(precoOriginal)}</span>
            <span class="combo__por">${formatarPreco(combo.preco)}</span>
          </div>
        </article>`;
    })
    .join("");
}

function desenharLista() {
  const termo = estado.busca.toLowerCase();
  const filtrados = itens.filter(
    (item) =>
      (estado.categoria === "todos" || item.categoria === estado.categoria) &&
      item.nome.toLowerCase().includes(termo)
  );

  lista.innerHTML = filtrados
    .map(
      (item) => `
      <li class="item">
        <div class="item__foto" aria-hidden="true">🍽️</div>
        <div class="item__info">
          <div class="item__topo">
            <h2 class="item__nome">${item.nome}</h2>
            <span class="item__preco">${formatarPreco(item.preco)}</span>
          </div>
          <p class="item__desc">${item.descricao}</p>
          ${item.destaque ? '<span class="item__selo">Mais pedido</span>' : ""}
        </div>
      </li>`
    )
    .join("");

  vazio.hidden = filtrados.length > 0;
}

// 4. Eventos
btnExplorar.addEventListener("click", () => {
  telaBoasVindas.hidden = true;
  telaCardapio.hidden = false;
  window.scrollTo(0, 0);
});

// Botão "Início": delegação de eventos, funciona mesmo se o botão mudar de lugar
document.addEventListener("click", (evento) => {
  if (!evento.target.closest("#btn-voltar")) return;
  telaCardapio.hidden = true;
  telaBoasVindas.hidden = false;
  window.scrollTo(0, 0);
});

tabs.addEventListener("click", (evento) => {
  const botao = evento.target.closest(".tab");
  if (!botao) return;
  estado.categoria = botao.dataset.categoria;
  desenharCategorias();
  desenharLista();
});

// Busca: um único ouvinte (esconde destaque e combos enquanto digita)
inputBusca.addEventListener("input", () => {
  estado.busca = inputBusca.value;
  const buscando = estado.busca !== "";
  secaoCombos.hidden = buscando;
  secaoDestaque.hidden = buscando;
  desenharLista();
});

// Setas do carrossel de combos
document.addEventListener("click", (evento) => {
  const seta = evento.target.closest("#combos-prev, #combos-next");
  if (!seta) return;
  const direcao = seta.id === "combos-prev" ? -1 : 1;
  trilhoCombos.scrollBy({ left: direcao * 300, behavior: "smooth" });
});

// 5. Inicialização
desenharCategorias();
desenharDestaque();
desenharCombos();
desenharLista();