// Scroll to Top Button
const toTop = document.createElement("button");
toTop.innerText = "↑";
toTop.classList.add("btn", "btn-primary", "position-fixed");
toTop.style.bottom = "20px";
toTop.style.right = "20px";
document.body.appendChild(toTop);

toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Sélectionner le formulaire et la zone du message de confirmation
const form = document.getElementById('contactForm');
const confirmationMessage = document.getElementById('confirmationMessage');

// Ajouter un écouteur d'événement pour la soumission du formulaire
form.addEventListener('submit', function (event) {
    // Empêcher le rechargement de la page
    event.preventDefault();

    // Réinitialiser le formulaire
    form.reset();

    // Afficher le message de confirmation
    confirmationMessage.style.display = 'block';

    // Cacher le message après 5 secondes
    setTimeout(() => {
        confirmationMessage.style.display = 'none';
    }, 5000);
});
