function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "Images/menu.png";
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "Images/close-menu.png";
    }

}

// Obtém o botão
var mybutton = document.getElementById("myBtn");

// Quando o usuário rola para baixo 20px da parte superior do documento, mostra o botão
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Quando o usuário clica no botão, rola para o topo do documento
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}
