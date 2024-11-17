//Ao realizar o scroll diminuir a navbar
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.getElementById("nav");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) { 
            console.log("Script carregado")
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });
});

// Troca de imagens no banner
const imagens = [
    "./assets/imagens/banner1.png",
    "./assets/imagens/banner2.png",
    "./assets/imagens/banner3.png"
];

let imagemAtual = 0;

const bannerImagem = document.querySelector('.banner-imagem');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function mudarImagem() {
    const larguraImagem = document.querySelector('.imagens_do_banner').clientWidth; // Pega a largura da imagem
    bannerImagem.style.transform = `translateX(-${imagemAtual * larguraImagem}px)`; // Desliza para a imagem correspondente
}


prevBtn.addEventListener('click', () => {
    imagemAtual = (imagemAtual === 0) ? imagens.length - 1 : imagemAtual - 1; //Move para anterior
    mudarImagem();
});


nextBtn.addEventListener('click', () => {
    imagemAtual = (imagemAtual === imagens.length - 1) ? 0 : imagemAtual + 1; //Move para prox
    mudarImagem();
});

function autoPlay() {
    setInterval(() => {
        imagemAtual = (imagemAtual === imagens.length - 1) ? 0 : imagemAtual + 1;
        mudarImagem();
    }, 3000); //A  cada 3segundos muda a imagem
}
autoPlay();

