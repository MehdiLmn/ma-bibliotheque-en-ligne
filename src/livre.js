class Livre {
    constructor(titre, auteur, image) {
        this.titre = titre;
        this.auteur = auteur;
        this.image = image;
}

createNewLivre = () => {
    const NewLivre = document.createElement("div");

    NewLivre.classList.add("col-md-3");
    NewLivre.innerHTML = 
    `<div class="card" style="width: 15rem;">
            <img src="${this.image}" class="card-img-top" alt="${this.titre}">
        <div class="card-body">
            <h5 class="card-title">${this.titre}</h5>
            <p class="card-text">${this.auteur}</p>
            <button class="btn btn-danger btn-sm" id="supprimer-livre">Supprimer</button>
        </div>
    </div>`;
return NewLivre;
};
}

export default Livre;