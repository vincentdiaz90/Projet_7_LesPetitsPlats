
let recipesConjoint;


    // Fonction qui permet de créer un tableau reliant les deux tableaux créé par les filtres --> interdépendance

function tabConjoint(){

    const listPlats = document.querySelector('#liste-plats');

    recipesConjoint = [];

    recipesActif.forEach(tabPrimaryInput => {
        recipesForActifTag.forEach(tabSecondaryInput => {
            if(tabPrimaryInput.id == tabSecondaryInput.id){
                recipesConjoint.push(tabSecondaryInput);
            }
        });
    });

        // Permet afficher message erreur si aucune recette trouvée

    if(recipesConjoint.length == 0){
        let wrapper = document.createElement('p');
        wrapper.classList.add('listRecetteVide');

        wrapper.innerText = `Désolé auncune recette ne correspond à votre recherche`

        listPlats.appendChild(wrapper);
    }
}
