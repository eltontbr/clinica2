let servicos = document.querySelector('.servicos');

let containerSubServicos = document.querySelector('.container-menu-servicos');
let mouseSobreServicos = false;
let mouseSobreSubServicos = false;
let menuAberto = false;

let botaoMenuHamburguer = document.querySelector("#menu-hamburguer");


let imagensBanner = document.querySelectorAll('.banner img');
let imagemBannerAtiva = 0;

servicos.onmouseenter = () => {
    containerSubServicos.style.display = 'block';
    mouseSobreServicos = true;
}

servicos.onmouseleave = () => {
    mouseSobreServicos = false;
    checarMouseMenu();
}

containerSubServicos.onmouseenter = () => {
    mouseSobreSubServicos = true;
}

containerSubServicos.onmouseleave = () => {
    mouseSobreSubServicos = false;
    checarMouseMenu();
}

function checarMouseMenu() {
    if (!mouseSobreServicos && !mouseSobreSubServicos) {
        containerSubServicos.style.display = 'none';
    }
}


function mudarMenu() {
    let menu = document.querySelector('header nav');

    if (menuAberto) {
        menu.style.transform = 'translateY(-150%)';
        menuAberto = false;
    }
    else {
        menu.style.transform = 'translateY(0)';
        menuAberto = true;
    }
}


botaoMenuHamburguer.onclick = mudarMenu;



function mudarSlide(){
    let imagemAtual = imagensBanner[imagemBannerAtiva];

    imagemAtual.classList.remove('ativa');

    imagemBannerAtiva++;

    if(imagemBannerAtiva == imagensBanner.length){
        imagemBannerAtiva = 0;
    }

    let proximaImagem = imagensBanner[imagemBannerAtiva];

    proximaImagem.classList.add('ativa');
}

setInterval(mudarSlide, 3000);





// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




