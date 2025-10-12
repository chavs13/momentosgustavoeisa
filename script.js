// ======== ANIMAÇÃO DE CORAÇÕES ========
const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "&#10084;"; // símbolo do coração
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (2 + Math.random() * 3) + "s";
  heart.style.fontSize = (12 + Math.random() * 20) + "px";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Cria novos corações a cada 200ms, mas menos em celular para performance
let intervalTime = window.innerWidth < 700 ? 400 : 200;
setInterval(createHeart, intervalTime);


// ======== SISTEMA DE SENHA ========
function verificarSenha() {
  const senha = document.getElementById('senha').value;
  const senhaCorreta = "euteamo"; // troque depois
  if (senha === senhaCorreta) {
    window.location.href = "momentos.html";
  } else {
    alert("Senha incorreta 💔");
  }
}
// ======== MODAL DE NOVO MOMENTO ========
const btnNovo = document.querySelector('.btn-novo-momento');
const modal = document.getElementById('modal-momento');
const spanClose = document.querySelector('.modal .close');

// Abrir modal ao clicar no botão
btnNovo.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'block';
});

// Fechar modal ao clicar no X
spanClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fechar modal ao clicar fora do conteúdo
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
