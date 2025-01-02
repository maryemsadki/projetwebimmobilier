const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('#show-login');
const registerLink = document.querySelector('#show-register');
const btnPopup = document.querySelector('.icon-close');
const btnLoginPopup = document.querySelector('.btnLogin-popup');

// Afficher le formulaire d'inscription lorsque l'on clique sur le lien "S'inscrire"
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active'); // Affiche le formulaire
    wrapper.classList.remove('active-popup'); // Assure que le formulaire de connexion est masqué
});

// Afficher le formulaire de connexion lorsque l'on clique sur le lien "Connexion"
loginLink.addEventListener('click', () => {
    wrapper.classList.add('active-popup'); // Affiche le formulaire
    wrapper.classList.remove('active'); // Assure que le formulaire d'enregistrement est masqué
});

// Afficher le formulaire de connexion lorsque l'on clique sur le bouton de connexion
btnLoginPopup.addEventListener('click', () => {
    wrapper.classList.add('active'); // Affiche le formulaire
    wrapper.classList.remove('active-popup'); // Assure que le formulaire d'enregistrement est masqué
    wrapper.style.display = 'flex';
});

// Fermer le formulaire lorsque l'on clique sur le bouton de fermeture
btnPopup.addEventListener('click', () => {
    wrapper.style.display = 'none'; // Cacher le formulaire
});



