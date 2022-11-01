        // Création des tags correspondant au clique

let tags = [];
let liTag= [];
let recipesForActifTag = recipes;

let uniqueValeurTag;


function ingredientsTag(e){
    
    let variable = e.target.innerText;
    let variableType = 'ingredients';
    tags.push('ingredients_' + variable);
    createTag(variable, variableType);
    filterTags();
    deletTag();
}

function appliancesTag(e){

    let variable = e.target.innerText;
    let variableType = 'appliances';
    tags.push('appliances_'+variable);
    createTag(variable, variableType);
    filterTags();
    deletTag();
}

function ustensilsTag(e){

    let variable = e.target.innerText;
    let variableType = 'ustensils';
    tags.push('ustensils_'+variable);
    createTag(variable, variableType);
    filterTags();
    deletTag();
}

    // Fonction qui permet de faire disparaitre un element dans un filtre si il est présent dans les tags

function displayNoneTag(){
    let ingredientsFiltreActif = document.querySelectorAll("#ingredients-filter-type .nom-filtre");

    let wrapperLiTagEnsemble = document.querySelectorAll(".tagLi");

    ingredientsFiltreActif.forEach(ingredientFiltreActif => {
        wrapperLiTagEnsemble.forEach(wrapperLiTagUnique => {          
            if(wrapperLiTagUnique.innerText.toLowerCase() == ingredientFiltreActif.innerText.toLowerCase()){
                ingredientFiltreActif.style.display = "none";
            }
        });
    });

    let appliancesFiltreActif = document.querySelectorAll("#appliance-filter-type .nom-filtre");

    appliancesFiltreActif.forEach(applianceFiltreActif => {
        wrapperLiTagEnsemble.forEach(wrapperLiTagUnique => {  
            if(wrapperLiTagUnique.innerText == applianceFiltreActif.innerText.toLowerCase()){
                applianceFiltreActif.style.display = "none";
            }
        });
    });

    let ustensilsFiltreActif = document.querySelectorAll("#ustensils-filter-type .nom-filtre");

    ustensilsFiltreActif.forEach(ustensilFiltreActif => {
        wrapperLiTagEnsemble.forEach(wrapperLiTagUnique => { 
            if(wrapperLiTagUnique.innerText == ustensilFiltreActif.innerText.toLowerCase()){
                ustensilFiltreActif.style.display = "none";
            }
        });
    });
}


    // Fonction qui permet de créer les tags au desus des 3 inputs

function createTag(tagName, variableType){

    let divTagUl = document.querySelector('.tagUl');

    let wrapperLiTag;
    let wrapperLiTagCross;

    wrapperLiTag = document.createElement('li');

    wrapperLiTag.classList.add('tagLi');
    wrapperLiTag.setAttribute("tagName", tagName);

    if(variableType == "ingredients"){
        wrapperLiTag.classList.add('tagIngredientsCustom');
    } else if(variableType == "appliances"){
        wrapperLiTag.classList.add('tagAppliancesCustom');
    } else if(variableType == "ustensils"){
        wrapperLiTag.classList.add('tagUstensilsCustom');
    }

    wrapperLiTag.innerText = `${tagName}`;

    wrapperLiTagCross = document.createElement('i');
    wrapperLiTagCross.classList.add('fa-solid');
    wrapperLiTagCross.classList.add('fa-x');

    wrapperLiTag.appendChild(wrapperLiTagCross);

    divTagUl.appendChild(wrapperLiTag);

    displayNoneTag();

}

    // Fonction qui permet de supprimer le tag selectionné au desus des 3 inputs via la croix

function deletTag(){

    let liTags = document.querySelectorAll('.tagLi');

    let ingredientsFiltreActif = document.querySelectorAll("#ingredients-filter-type .nom-filtre");
    let appliancesFiltreActif = document.querySelectorAll("#appliance-filter-type .nom-filtre");
    let ustensilsFiltreActif = document.querySelectorAll("#ustensils-filter-type .nom-filtre");

    liTags.forEach(li => {
        li.querySelector('i').addEventListener("click", function(e) {          

            let attribute = e.target.closest("li").getAttribute("tagName");

            ingredientsFiltreActif.forEach(ingredientFiltreActif => {
                if(attribute.toLowerCase() == ingredientFiltreActif.innerText){
                    ingredientFiltreActif.style.display = "block";
                }
            })

            appliancesFiltreActif.forEach(applianceFiltreActif => {
                if(attribute.toLowerCase() == applianceFiltreActif.innerText){
                    applianceFiltreActif.style.display = "block";
                }
            });

            ustensilsFiltreActif.forEach(ustensilFiltreActif => {
                if(attribute.toLowerCase() == ustensilFiltreActif.innerText){
                    ustensilFiltreActif.style.display = "block";
                }
            });



            tags.forEach(tag => {
                if(tag.split("_")[1] == attribute){
                    let index = tags.indexOf(tag);
                    tags.splice(index, 1);
                    li.remove();
                }
            });

            filterTags();
 
        });
    });

}



// Recherche dynamique dans les filtres individuellement


let ingredientsFilter = document.querySelector('#ingredients-field');
let appliancesFilter = document.querySelector('#appliance-field');
let ustensilsFilter = document.querySelector('#ustensils-field');

let listIngredientsTagActif = [];
let listAppliancesTagActif = [];
let listUstensilsTagActif = [];



ingredientsFilter.addEventListener('input', function(e) {
    filterDataLoadingIngredientsTag(e);
})
appliancesFilter.addEventListener('input', function(e) {
    filterDataLoadingAppliancesTag(e);
})
ustensilsFilter.addEventListener('input', function(e) {
    filterDataLoadingUstensilsTag(e);
})



function filterDataLoadingIngredientsTag(e){

    let filterActive = e.target.value.toLowerCase();

    let ingredientsFiltreActif = document.querySelectorAll("#ingredients-filter-type .nom-filtre");

    ingredientsFiltreActif.forEach(ingredientFiltreActif => {
        if(ingredientFiltreActif.innerText.toLowerCase().includes(filterActive)){
            ingredientFiltreActif.style.display = "block";
        } else {
            ingredientFiltreActif.style.display = "none";
        }
    });


}
  

function filterDataLoadingAppliancesTag(e) {
    let filterActive = e.target.value.toLowerCase();

    let appliancesFiltreActif = document.querySelectorAll("#appliance-filter-type .nom-filtre");

    appliancesFiltreActif.forEach(applianceFiltreActif => {
        if(applianceFiltreActif.innerText.toLowerCase().includes(filterActive)){
            applianceFiltreActif.style.display = "block";
        } else {
            applianceFiltreActif.style.display = "none";
        }
    });
}



function filterDataLoadingUstensilsTag(e) {
    let filterActive = e.target.value.toLowerCase();

    let ustensilsFiltreActif = document.querySelectorAll("#ustensils-filter-type .nom-filtre");

    ustensilsFiltreActif.forEach(ustensilFiltreActif => {
        if(ustensilFiltreActif.innerText.toLowerCase().includes(filterActive)){
            ustensilFiltreActif.style.display = "block";
        } else {
            ustensilFiltreActif.style.display = "none";
        }
    });
}





        /*  Filtre des cartes par les tags */


function filterTags(e) {

        // Intégration dans un tableau des tags actifs

    
    recipesForActifTag = [];

    recipes.forEach(recipe => {  

        let variable = true;

        tags.forEach(tag => {

            tag = tag.split('_');

            if(tag[0] == "ingredients"){

                let variableIngredients = false;

                recipe.ingredients.forEach(ingredient => { 
                    if(ingredient.ingredient.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') == tag[1].replace(/[^a-zA-Z0-9]/g, '')){
                        variableIngredients = true;
                    }
                });

                if(variableIngredients == false){
                    variable = false;
                }

            } else if(tag[0] == "appliances"){
                if(recipe.appliance.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') != tag[1].replace(/[^a-zA-Z0-9]/g, '')){
                    variable = false;
                }
            } else if(tag[0] == "ustensils"){ 
                if(!recipe.ustensils.includes(tag[1])){
                    variable = false;
                }
            }
        });

        if(variable == true){
            recipesForActifTag.push(recipe);
        }
        
    });

    recipesForActifTag = [...new Set(recipesForActifTag)];

    tabConjoint()
    
        // Intégration des cartes correspondant aux tags dans le tableau

    const listPlats = document.querySelector('#liste-plats');
    listPlats.innerHTML = "";

    if(tags.length != 0){

        recipesConjoint.forEach(element => {
            let wrapper = document.createElement('article');
            wrapper.classList.add('plat');
        
                wrapper.innerHTML = `
                    <div class="image-plat"></div>
                    <div class="description-plat">
                        <h2 class="titre-plat">${element.name}</h2>
                        <p class="temps-preparation">
                            <i class="fas fa-light fa-clock"></i>
                            <span>${element.time} min</span>
                        </p>
                        <div class="liste-ingredient"></div>
                        <div class="recette">
                            <p>${element.description}</p>
                        </div>
                    </div>
                `
        
            listPlats.appendChild(wrapper);
        });
    
        let listeIngredient = document.querySelectorAll('.liste-ingredient');
    
    
    
        for(let k = 0; k < listeIngredient.length; k++){
            
            for(let i = 0; i < recipesConjoint.length; i++){
                
                if( k == i ){
            
                    for(let j=0; j<recipesConjoint[i].ingredients.length; j++){
    
                        let wrapper = document.createElement('p');
            
                        wrapper.innerHTML = `
                            <span class="type-ingredient">${ recipesConjoint[i].ingredients[j].ingredient } </span>
                            <span class="nombre-ingredient">: ${ recipesConjoint[i].ingredients[j].quantity ? recipesConjoint[i].ingredients[j].quantity : recipesConjoint[i].ingredients[j].quantite } ${ recipesConjoint[i].ingredients[j].unit ? recipesConjoint[i].ingredients[j].unit : "" }</span>
                        `
    
                        if(!recipesConjoint[i].ingredients[j].quantity && !recipesConjoint[i].ingredients[j].quantite){
                            wrapper.childNodes[3].innerText = "";
                        }
    
                        listeIngredient[k].appendChild(wrapper);
            
                    }
                }
            
            }
        }
        initialLoadFilter(recipesConjoint);
    } else {
        LoadCard();
        initialLoadFilter(recipesConjoint);
    }
}
