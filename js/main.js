// Menu mobile: abre e fecha a navegação em telas pequenas
document.addEventListener('DOMContentLoaded', function () {
  var botaoMenu = document.querySelector('.botao-menu');
  var menuPrincipal = document.querySelector('.menu-principal');

  if (botaoMenu && menuPrincipal) {
    botaoMenu.addEventListener('click', function () {
      var aberto = menuPrincipal.classList.toggle('aberto');
      botaoMenu.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    });

    menuPrincipal.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuPrincipal.classList.remove('aberto');
        botaoMenu.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Perguntas frequentes: abre e fecha cada resposta ao clicar
  var itensFaq = document.querySelectorAll('.item-faq');
  itensFaq.forEach(function (item) {
    var pergunta = item.querySelector('.pergunta-faq');
    pergunta.addEventListener('click', function () {
      var jaAberto = item.classList.contains('aberto');

      itensFaq.forEach(function (outro) {
        outro.classList.remove('aberto');
        outro.querySelector('.pergunta-faq').setAttribute('aria-expanded', 'false');
      });

      if (!jaAberto) {
        item.classList.add('aberto');
        pergunta.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Ano atual no rodapé
  var elementoAno = document.getElementById('ano-atual');
  if (elementoAno) {
    elementoAno.textContent = new Date().getFullYear();
  }
});
