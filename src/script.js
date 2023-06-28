import Livre from "./livre.js";

// récupérer le formulaire
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    // empèche la page de se rafraichir
    event.preventDefault();
    // récupérer les champs
    const champTitre = document.querySelector('#titre-input');
    const champAuteur = document.querySelector('#auteur-input');
    const champImage = document.querySelector('#image-input');
    // récupérer les valeurs des champs
    const titre = champTitre.value;
    const auteur = champAuteur.value;
    const image = champImage.value;
    // créer un nouveau livre
    const newLivre = new Livre(titre, auteur, image);
    const NewLivre = newLivre.createNewLivre();
    // crée un bouton supprimer
    const supprimerBouton = NewLivre.querySelector("#supprimer-livre");
    supprimerBouton.addEventListener("click", function() {
    // Code à exécuter lorsqu'on clique sur le bouton
    NewLivre.remove();
    });
    // ajouter le nouveau livre dans la liste
    const container = document.querySelector('.row');
    container.appendChild(NewLivre);
    // pour réinitialiser le formulaire
    champTitre.value = '';
    champAuteur.value = '';
    champImage.value = '';
});


