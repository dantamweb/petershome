/* ============================================
   PETER'S HOME — script.js
   Menu mobile · Filtres catalogue · Formulaires
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ===== MENU BURGER (mobile) ===== */
  const burger = document.querySelector('.nav__burger');
  const menu = document.querySelector('.nav__menu');

  if (burger && menu) {
    burger.addEventListener('click', function () {
      menu.classList.toggle('is-open');
    });

    // Ferme le menu quand on clique sur un lien
    menu.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('is-open');
      });
    });
  }

  /* ===== FILTRES CATALOGUE ===== */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const sections = document.querySelectorAll('.cat-section');

  if (filterButtons.length > 0) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const filter = btn.getAttribute('data-filter');

        // Met à jour le bouton actif
        filterButtons.forEach(function (b) {
          b.classList.remove('filter-btn--active');
        });
        btn.classList.add('filter-btn--active');

        // Affiche / masque les sections
        sections.forEach(function (section) {
          const cats = section.getAttribute('data-cat') || '';
          if (filter === 'all' || cats.indexOf(filter) !== -1) {
            section.classList.remove('is-hidden');
          } else {
            section.classList.add('is-hidden');
          }
        });

        // Remonte en haut de la zone catalogue
        const catalog = document.querySelector('.catalog');
        if (catalog) {
          const top = catalog.offsetTop - 120;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });
  }

});

/* ===== FORMULAIRES (placeholder) =====
   Pour l'instant ces fonctions affichent juste un message.
   Quand vous aurez un hébergement avec email/back-end,
   on les connectera pour envoyer réellement les données. */

function handleContact(event) {
  event.preventDefault();
  alert("Merci pour votre message ! \n\nLe formulaire n'est pas encore connecté à l'envoi automatique. " +
        "En attendant, vous pouvez nous écrire directement à info@petershome.ch ou au 078 895 14 18.");
  return false;
}

function handleLogin(event) {
  event.preventDefault();
  alert("L'espace pro arrive bientôt ! \n\nLa connexion en ligne n'est pas encore active. " +
        "Pour obtenir vos tarifs revendeur, contactez-nous à info@petershome.ch.");
  return false;
}

function handleSignup(event) {
  event.preventDefault();
  alert("Merci pour votre intérêt ! \n\nVotre demande de compte revendeur sera bientôt traitable en ligne. " +
        "En attendant, écrivez-nous à info@petershome.ch et nous vous recontactons sous 48h.");
  return false;
}