
initialLoadFilter();



        // Création des tags correspondant au clique

let tag = [];
let liTag= [];
let valeurTab = [];

let uniqueValeurTag;
let uniqueValeurTagSplit = [];

let nvTabIngredient = [];
let nvTabAppliances = [];
let nvTabUstensils = [];

let liIngredients = document.querySelectorAll('#ingredients-filter-div .nom-filtre');
let liAppliances = document.querySelectorAll('#appliance-filter-div .nom-filtre');
let liUstensils = document.querySelectorAll('#ustensils-filter-div .nom-filtre');

let divTagUl = document.querySelector('.tagUl');


function ingredientsTagEvent(e){
    
    let variable = e.target.innerText;
    tag.push('ingredients_' + variable);
    getType();
    divTagUl.innerHTML = "";
    createTag();
    deletTag();
    filterByTag();
}

function appliancesTag(e){

    let variable = e.target.innerText;
    tag.push('appliances_'+variable);
    getType();
    divTagUl.innerHTML = "";
    createTag();
    deletTag();
    filterByTag();
}

function ustensilsTag(e){

    let variable = e.target.innerText;
    tag.push('ustensils_'+variable);
    getType();
    divTagUl.innerHTML = "";
    createTag();
    deletTag();
    filterByTag();
}

function getType(){
        //Construction d'un tableau avec des valeur unique
    uniqueValeurTag = [...new Set(tag)];
    uniqueValeurTag.forEach(element => {
        element = element.split('_');
        element = element[1]
        uniqueValeurTagSplit.push(element)
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
        li.childNodes[5].addEventListener("click", function(e) {          

            uniqueValeurTagSplit.forEach(element => {
                if(e.path[1].innerText.toLowerCase() == element.toLowerCase()){
                        // Utilisation de slice pour supprimer la valeur voulue donx besoin de l'index
                    let index = uniqueValeurTagSplit.indexOf(element);
                        // Supprimer les valeur du tableau sur lequel se base la création du li
                    uniqueValeurTagSplit.splice(index, 1);
                    uniqueValeurTag.splice(index, 1);
                    tag.splice(index, 1);
                        // Supprimer le li du DOM
                    li.remove(e.target);
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
                ingredientsTagEvent(e);
                filterByTag();
                LoadCard();
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


function filterByTag(){

    let globalTags = document.querySelectorAll('#filter-tag .tagLi');

    let nvTableau = recipesActif;


    
    uniqueValeurTag.forEach(tag => {

        let tagWithoutType = tag.split("_");
        let tagWithoutTypeUnique = [...new Set(tagWithoutType)]
        

        if(tagWithoutTypeUnique[0] == 'ingredients'){            
            nvTableau = filterByTagIngredient(tagWithoutTypeUnique[1].replace(/[^a-zA-Z0-9]/g, ''), nvTableau);
            
        }
        if(tagWithoutTypeUnique[0] == 'appliances'){           
            nvTableau = filterByTagAppliances(tagWithoutTypeUnique[1].replace(/[^a-zA-Z0-9]/g, ''), nvTableau);
        }
        if(tagWithoutTypeUnique[0] == 'ustensils'){           
            nvTableau = filterByTagUstensils(tagWithoutTypeUnique[1].replace(/[^a-zA-Z0-9]/g, ''), nvTableau);
        }
    });

}


function filterByTagIngredient(valeur, nvTableau){

    valeurTab.push(valeur);
    valeurTab = [...new Set(valeurTab)];
    //console.log(valeurTab);

    nvTableau.forEach(element => {
        element.ingredients.forEach(el => {

            let ingredient = el.ingredient.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

            //console.log(ingredient);
            //console.log(valeur);

            for(let i=0 ; i < valeurTab.length; i++){
                //console.log(valeurTab[i]);    
                if(valeurTab[i].toLowerCase() == ingredient.toLowerCase()){
                    nvTabIngredient.push(element);
                    nvTabIngredient = [...new Set(nvTabIngredient)];
                }
            }
        });  
    }); 
    console.log(nvTabIngredient);

    return nvTabIngredient;
}

function filterByTagAppliances(valeur, nvTableau){


    nvTableau.forEach(element => {
        
        let appliance = element.appliance.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

        //console.log(appliance);
        //console.log(valeur);

        if(valeur.toLowerCase() == appliance){
            nvTabAppliances.push(element);
            nvTabAppliances = [...new Set(nvTabAppliances)];
        }    
    });

    //console.log(nvTabAppliances);

    return nvTabAppliances;
}

function filterByTagUstensils(valeur, nvTableau){


    nvTableau.forEach(element => {
        //console.log(element);
        
        element.ustensils.forEach(el => {

            let ustensils = el.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

            //console.log(ustensils);
            //console.log(valeur);

            if(valeur.toLowerCase() == ustensils){
                nvTabUstensils.push(element);
                nvTabUstensils = [...new Set(nvTabUstensils)];
            }
        })
       
    });
    //console.log(nvTabUstensils);

    return nvTabUstensils;
}