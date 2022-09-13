
initialLoadFilter();


// Recherche dynamique dans les filtres individuellement


let ingredientsFilter = document.querySelector('#ingredients-field');
let appliancesFilter = document.querySelector('#appliance-field');
let ustensilsFilter = document.querySelector('#ustensils-field');

let listIngredientsTagActif = [];
let listAppliancesTagActif = [];
let listUstensilsTagActif = [];



ingredientsFilter.addEventListener('input', (e) => {
    filterDataLoadingIngredientsTag(e);
    ingredientsTag();
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
        
        wrapperUstensils.appendChild(wrapperLiUstensils);
    }

    filtreUstensils.appendChild(wrapperUstensils);
}







        // Création des tags correspondant au clique

let tag = [];
let uniqueValeurTag;

let liIngredients = document.querySelectorAll('#ingredients-filter-div .nom-filtre');
let liAppliances = document.querySelectorAll('#appliance-filter-div .nom-filtre');
let liUstensils = document.querySelectorAll('#ustensils-filter-div .nom-filtre');

let divTagUl = document.querySelector('.tagUl');

ingredientsTag();
appliancesTag();
ustensilsTag();

function ingredientsTag(){

    for(let i=0; i< liIngredients.length; i++){
        
        liIngredients[i].addEventListener('click', (e) => {
    
            let variable = e.target.innerText;
            tag.push(variable);
    
                //Construction d'un tableau avec des valeur unique
            uniqueValeurTag = [...new Set(tag)]
    
            divTagUl.innerHTML = "";
            createTag();
        })
    }
}

function appliancesTag(){
    for(let i=0; i< liAppliances.length; i++){
        liAppliances[i].addEventListener('click', (e) => {
            let variable = e.target.innerText;
            tag.push(variable);
            uniqueValeurTag = [...new Set(tag)]
            divTagUl.innerHTML = "";
            createTag();
        })
    }
}

function ustensilsTag(){
    for(let i=0; i< liUstensils.length; i++){
        liUstensils[i].addEventListener('click', (e) => {
            let variable = e.target.innerText;
            tag.push(variable);
            uniqueValeurTag = [...new Set(tag)]
            divTagUl.innerHTML = "";
            createTag();
        })
    }
}



function createTag(){

    for(let i = 0; i < uniqueValeurTag.length; i++){
        //console.log(tag[i]);


        let wrapperLiTag = document.createElement('li');
        wrapperLiTag.classList.add('tagLi');
        
        wrapperLiTag.innerText = ` ${uniqueValeurTag[i]} `

        divTagUl.appendChild(wrapperLiTag);
    
    }

}



