
initialLoadFilter();


        // Création des tags correspondant au clique

let tag = [];
let uniqueValeurTag;

let liIngredients = document.querySelectorAll('#ingredients-filter-div .nom-filtre');
let liAppliances = document.querySelectorAll('#appliance-filter-div .nom-filtre');
let liUstensils = document.querySelectorAll('#ustensils-filter-div .nom-filtre');

let divTagUl = document.querySelector('.tagUl');


function ingredientsTagEvent(e){
    
    let variable = e.target.innerText;
    tag.push(variable);

        //Construction d'un tableau avec des valeur unique
    uniqueValeurTag = [...new Set(tag)]

    console.log(uniqueValeurTag);

    divTagUl.innerHTML = "";
    createTag();
}

function appliancesTag(e){

    let variable = e.target.innerText;
    tag.push(variable);
    uniqueValeurTag = [...new Set(tag)]
    divTagUl.innerHTML = "";
    createTag();

}

function ustensilsTag(e){

    let variable = e.target.innerText;
    tag.push(variable);
    uniqueValeurTag = [...new Set(tag)]
    divTagUl.innerHTML = "";
    createTag();

}



function createTag(){

    for(let i = 0; i < uniqueValeurTag.length; i++){
        //console.log(tag[i]);
        let wrapperLiTag = document.createElement('li');
        wrapperLiTag.classList.add('tagLi');
        
        wrapperLiTag.innerText = ` ${uniqueValeurTag[i]} `

        divTagUl.appendChild(wrapperLiTag);

        let wrapperLiTagSpan = document.createElement('i');
        wrapperLiTagSpan.classList.add('fa-solid');
        wrapperLiTagSpan.classList.add('fa-x');

        wrapperLiTag.appendChild(wrapperLiTagSpan);
    }

}


// Recherche dynamique dans les filtres individuellement


let ingredientsFilter = document.querySelector('#ingredients-field');
let appliancesFilter = document.querySelector('#appliance-field');
let ustensilsFilter = document.querySelector('#ustensils-field');

let listIngredientsTagActif = [];
let listAppliancesTagActif = [];
let listUstensilsTagActif = [];



ingredientsFilter.addEventListener('input', (e) => {
    filterDataLoadingIngredientsTag(e);
})
appliancesFilter.addEventListener('input', (e) => {
    filterDataLoadingAppliancesTag(e);
})
ustensilsFilter.addEventListener('input', (e) => {
    filterDataLoadingUstensilsTag(e);
})



//console.log(ingredients);

function filterDataLoadingIngredientsTag(e){

    let filterActive = e.target.value.toLowerCase();

        listIngredientsTagActif = []
    
        for(let i = 0; i< ingredients.length; i++){
            if(ingredients[i].toLowerCase().includes(filterActive.toLowerCase())){
                listIngredientsTagActif.push(ingredients[i]);
            } 
        }
    
        let wrapper = document.createElement('ul');
        wrapper.id = 'ingredients-filter-type';
        wrapper.classList.add('filter-listing');
    
        filtreIngredient.innerHTML = ""
    
        for(let i = 0; i < listIngredientsTagActif.length; i++){
        
            let wrapperLi = document.createElement('li');
            wrapperLi.classList.add('nom-filtre');
            
            wrapperLi.innerText = `
                ${listIngredientsTagActif[i]}
            `

            wrapperLi.addEventListener("click", (e) => {
                ingredientsTagEvent(e);
                filterByTag();
            })

            wrapper.appendChild(wrapperLi);
        }

        filtreIngredient.appendChild(wrapper);

}

function filterDataLoadingAppliancesTag(e) {
    let filterActive = e.target.value.toLowerCase();

        listAppliancesTagActif = []
        for(let i = 0; i< appliances.length; i++){
            if(appliances[i].toLowerCase().includes(filterActive.toLowerCase())){
                listAppliancesTagActif.push(appliances[i]);
            } 
        }
    
        let wrapperAppliances = document.createElement('ul');
        wrapperAppliances.id = 'appliance-filter-type';
        wrapperAppliances.classList.add('filter-listing');
    
        filtreAppliance.innerHTML = ""
    
        for(let i = 0; i < listAppliancesTagActif.length; i++){
        
            let wrapperLiAppliances = document.createElement('li');
            wrapperLiAppliances.classList.add('nom-filtre');
            
            wrapperLiAppliances.innerText = `
                ${listAppliancesTagActif[i]}
            `

            wrapperLiAppliances.addEventListener("click", (e) => {
                appliancesTag(e)
            })

            wrapperAppliances.appendChild(wrapperLiAppliances);
        }
    
        filtreAppliance.appendChild(wrapperAppliances);
}

function filterDataLoadingUstensilsTag(e) {
    let filterActive = e.target.value.toLowerCase();

        listUstensilsTagActif = []
        for(let i = 0; i< ustensils.length; i++){
            if(ustensils[i].toLowerCase().includes(filterActive.toLowerCase())){
                listUstensilsTagActif.push(ustensils[i]);
            } 
        }
    
        let wrapperUstensils = document.createElement('ul');
        wrapperUstensils.id = 'ustensils-filter-type';
        wrapperUstensils.classList.add('filter-listing');
    
        filtreUstensils.innerHTML = ""
    
        for(let i = 0; i < listUstensilsTagActif.length; i++){
        
            let wrapperLiUstensils = document.createElement('li');
            wrapperLiUstensils.classList.add('nom-filtre');
            
            wrapperLiUstensils.innerText = `
                ${listUstensilsTagActif[i]}
            `

            wrapperLiUstensils.addEventListener("click", (e) => {
                
                ustensilsTag(e)
            })
            
            wrapperUstensils.appendChild(wrapperLiUstensils);
    
        filtreUstensils.appendChild(wrapperUstensils);
    }
}




            // Filtre des cartes par les tag

    // 1 - rentrer les valeurs des tags dans un tableau (déja dans : uniqueValeurTag)
    // 2 - Comparer avec le tableau des recettes (recipes)
            // Si correspondance faire un trie et enregistrer ce trie comme nouvelle valeur de recipes pour la fonction filterDataLoadingCard
    // 3 - Mettre en place une croix pour supprimer un tag
    // 4 - Si clique sur une croix alors supprimer le tag puis supprimer sa valeur dans le tableau des tags puis faire un nouveau trie pour recipes

function filterByTag(){

    let globalTags = document.querySelectorAll('#filter-tag .tagLi');

    uniqueValeurTag; 


 /*   
    if(uniqueValeurTag.length != 0){
        for( let i=0; i<uniqueValeurTag.length; i++){
            for(let j=0; j<recipes.length; j++){
                if(uniqueValeurTag[i].innerText.toLowerCase() == recipes[j].innerText.toLowerCase()){
                    recipes = []
                    recipes.push
                }
            }
        }
  */

}





/*
function filterTagCardOnLoad(){

    const listPlats = document.querySelector('#liste-plats');

    let filterActive = e.target.value.toLowerCase();

    listPlats.innerHTML = "";

    if(globalTags.length != 0){

    }
}
*/
