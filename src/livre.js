class Livre {
    constructor(titre, auteur, image) {
        this.titre = titre;
        this.auteur = auteur;
        this.image = image;
}

createNewLivre = () => {

    $(document).ready(function(){
        $("button").click(function(){
            $("textarea").toggle();
        });
    });

    const NewLivre = document.createElement("div");

    NewLivre.classList.add("col-md-3");
    NewLivre.innerHTML = 
    `<div class="card" style="width: 15rem;">
            <img src="${this.image}" class="card-img-top" alt="${this.titre}">
        <div class="card-body">
            <h5 class="card-title">${this.titre}</h5>
            <p class="card-text">${this.auteur}</p>

            <button type="button" class="btn btn-success btn-sm">Votre résumé</button>
            <textarea class="form-control mt-2 mb-2" id="exampleFormControlTextarea1" rows="2"></textarea>
            
            <button class="btn btn-danger btn-sm" id="supprimer-livre">Supprimer</button>
        </div>
    </div>`;
return NewLivre;


    };
};

export default Livre;