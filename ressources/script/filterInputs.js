        // Création des tags correspondant au clique

let tag = [];
let liTag= [];

let uniqueValeurTag;
let uniqueValeurTagSplit = [];



let divTagUl = document.querySelector('.tagUl');


function ingredientsTag(e){
    
    let variable = e.target.innerText;
    tag.push('ingredients_' + variable);
    getType();
    divTagUl.innerHTML = "";
    createTag();
    deletTag();
}

function appliancesTag(e){

    let variable = e.target.innerText;
    tag.push('appliances_'+variable);
    getType();
    divTagUl.innerHTML = "";
    createTag();
    deletTag();
}

function ustensilsTag(e){

    let variable = e.target.innerText;
    tag.push('ustensils_'+variable);
    getType();
    divTagUl.innerHTML = "";
    createTag();
    deletTag();
}

function getType(){
        //Construction d'un tableau avec des valeur unique
    uniqueValeurTag = [...new Set(tag)];
    uniqueValeurTag.forEach(element => {
        element = element.split('_');
        element = element[1];
        uniqueValeurTagSplit.push(element);
        uniqueValeurTagSplit = [...new Set(uniqueValeurTagSplit)];
    }); 
}

function createTag(){

    let wrapperLiTag;
    let wrapperLiTagCross;

    for(let i = 0; i < uniqueValeurTagSplit.length; i++){
        wrapperLiTag = document.createElement('li');
        wrapperLiTag.classList.add('tagLi');
        
        wrapperLiTag.innerText = ` ${uniqueValeurTagSplit[i]} `

        divTagUl.appendChild(wrapperLiTag);

        liTag.push(wrapperLiTag);
        liTag = [...new Set(liTag)];

        wrapperLiTagCross = document.createElement('i');
        wrapperLiTagCross.classList.add('fa-solid');
        wrapperLiTagCross.classList.add('fa-x');

        wrapperLiTag.appendChild(wrapperLiTagCross);
    };
    
}

function deletTag(){

    let liTags = document.querySelectorAll('.tagLi');

    liTags.forEach(li => {
        li.querySelector('i').addEventListener("click", function(e) {          

            uniqueValeurTagSplit.forEach(element => {
                if(e.path[1].innerText.toLowerCase() == element.toLowerCase()){
                        // Utilisation de slice pour supprimer la valeur voulue donc besoin de l'index
                    let index = uniqueValeurTagSplit.indexOf(element);
                        // Supprimer les valeur du tableau sur lequel se base la création du li
                    uniqueValeurTagSplit.splice(index, 1);
                    uniqueValeurTag.splice(index, 1);
                    tag.splice(index, 1);
                        // Supprimer le li du DOM
                    li.remove(e.target);

                    filterByTag();
                    loadCardByTag();
                } 
            })    
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
                filterByTag();
                loadCardByTag();
            });

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
                filterByTag();
                loadCardByTag();
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
                filterByTag();
                loadCardByTag();
            })
            
            wrapperUstensils.appendChild(wrapperLiUstensils);
    
        filtreUstensils.appendChild(wrapperUstensils);
    }
}




            // Filtre des cartes par les tag

nvTableau = [];

function filterByTag(){

    recipes.forEach(recipe => {

            uniqueValeurTag.forEach(tab => {
                
                let tabType = tab.split('_');

                if(tabType[0] == 'ingredients'){   
                    recipe.ingredients.forEach( ingredient => {
                        if(ingredient.ingredient.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').includes(tabType[1].toLowerCase().replace(/[^a-zA-Z0-9]/g, ''))) {
                            nvTableau.push(recipe);
                        }
                    });                    
                }
    
                else if(tabType[0] == 'appliances'){           
                    if(recipe.appliance.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').includes(tabType[1].toLowerCase().replace(/[^a-zA-Z0-9]/g, ''))){
                        nvTableau.push(recipe);
                    }
                }
                else if(tabType[0] == 'ustensils'){    
                    recipe.ustensils.forEach(ustensil => {
                        if(ustensil.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').includes(tabType[1].toLowerCase().replace(/[^a-zA-Z0-9]/g, ''))){
                            nvTableau.push(recipe);
                        }
                    });
                }
            });
        });

    nvTableau = [...new Set(nvTableau)];
    //console.log(nvTableau);

}


function loadCardByTag(){

    const listPlats = document.querySelector('#liste-plats');

    listPlats.innerHTML = "";

    for(let i = 0; i < nvTableau.length; i++){  
    
        let wrapper = document.createElement('article');
        wrapper.classList.add('plat');
    
            wrapper.innerHTML = `
                <div class="image-plat"></div>
                <div class="description-plat">
                    <h2 class="titre-plat">${nvTableau[i].name}</h2>
                    <p class="temps-preparation">
                        <i class="fas fa-light fa-clock"></i>
                        <span>${nvTableau[i].time} min</span>
                    </p>
                    <div class="liste-ingredient"></div>
                    <div class="recette">
                        <p>${nvTableau[i].description}</p>
                    </div>
                </div>
            `
    
        listPlats.appendChild(wrapper);
    
    }

    let listeIngredient = document.querySelectorAll('.liste-ingredient');



    for(let k = 0; k < listeIngredient.length; k++){
        
        for(let i = 0; i < nvTableau.length; i++){
            
            if( k == i ){
        
                for(let j=0; j<nvTableau[i].ingredients.length; j++){

                    let wrapper = document.createElement('p');
        
                    wrapper.innerHTML = `
                        <span class="type-ingredient">${ nvTableau[i].ingredients[j].ingredient } </span>
                        <span class="nombre-ingredient">: ${ nvTableau[i].ingredients[j].quantity ? nvTableau[i].ingredients[j].quantity : nvTableau[i].ingredients[j].quantite } ${ nvTableau[i].ingredients[j].unit ? nvTableau[i].ingredients[j].unit : "" }</span>
                    `

                    if(!nvTableau[i].ingredients[j].quantity && !nvTableau[i].ingredients[j].quantite){
                        wrapper.childNodes[3].innerText = "";
                    }

                    listeIngredient[k].appendChild(wrapper);
        
                }
            }
        
        }
    }
}