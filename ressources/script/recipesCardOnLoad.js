console.log(recipes);

const globalFilter = document.querySelector('#champ-recherch');

let recipesActif = recipes;

        /*  Intégration carte dynamique  */

window.addEventListener('load', function() {
    initialLoadCard();
    initialLoadFilter();
});
        
globalFilter.addEventListener('input', function(e) {

    filterDataLoadingCard(e);
    initialLoadCard();
    initialLoadFilter();
});




function filterDataLoadingCard(e){

    const listPlats = document.querySelector('#liste-plats');

    let filterActive = e.target.value.toLowerCase();

    listPlats.innerHTML = "";



    recipesActif = [];


    for(element of recipes){
        let valide = false;
        if(element.name.toLowerCase().includes(filterActive)){
            valide = true;
            recipesActif.push(element)
        } 
        
        if(valide == false) {
            for(ingredient of element.ingredients){
                if(ingredient.ingredient.toLowerCase().includes(filterActive)){ 
                    recipesActif.push(element)
                    valide = true;
                    break;
                }
            }
        }
        
        if(valide == false){
            if(element.appliance.toLowerCase().includes(filterActive)){
                valide = true;
                recipesActif.push(element);
                
            }
        }
        
        if(valide == false){
            for(ustensil of element.ustensils){
                if(ustensil.toLowerCase().includes(filterActive)){
                    recipesActif.push(element);
                    valide = true;                   
                    break;                
                }
            }
        }
        
        if(valide == false) {
            if(element.description.toLowerCase().includes(filterActive)){
                recipesActif.push(element);                
            }
        }
    }
}


function initialLoadCard(){
    const listPlats = document.querySelector('#liste-plats');

    for(let i = 0; i < recipesActif.length; i++){  
    
        let wrapper = document.createElement('article');
        wrapper.classList.add('plat');
    
            wrapper.innerHTML = `
                <div class="image-plat"></div>
                <div class="description-plat">
                    <h2 class="titre-plat">${recipesActif[i].name}</h2>
                    <p class="temps-preparation">
                        <i class="fas fa-light fa-clock"></i>
                        <span>${recipesActif[i].time} min</span>
                    </p>
                    <div class="liste-ingredient"></div>
                    <div class="recette">
                        <p>${recipesActif[i].description}</p>
                    </div>
                </div>
            `
    
        listPlats.appendChild(wrapper);
    
    }

    let listeIngredient = document.querySelectorAll('.liste-ingredient');



    for(let k = 0; k < listeIngredient.length; k++){
        
        for(let i = 0; i < recipesActif.length; i++){
            
            if( k == i ){
        
                for(let j=0; j<recipesActif[i].ingredients.length; j++){

                    let wrapper = document.createElement('p');
        
                    wrapper.innerHTML = `
                        <span class="type-ingredient">${ recipesActif[i].ingredients[j].ingredient }: </span>
                        <span class="nombre-ingredient">${ recipesActif[i].ingredients[j].quantity ? recipesActif[i].ingredients[j].quantity : recipesActif[i].ingredients[j].quantite } ${ recipesActif[i].ingredients[j].unit ? recipesActif[i].ingredients[j].unit : "" }</span>
                    `
                    listeIngredient[k].appendChild(wrapper);
        
                }
            }
        
        }
    }
}
        

 
        
        
                    /*  Intégration filtre dynamique  */
let ingredients = [];
let appliances = [];
let ustensils = [];

let filtreIngredient = document.querySelector('#ingredients-filter-div');
let filtreAppliance = document.querySelector('#appliance-filter-div');
let filtreUstensils = document.querySelector('#ustensils-filter-div');

function initialLoadFilter(){
    initialLoadFilterIngredients();
    initialLoadFilterAppliances();
    initialLoadFilterUstensils();
}     
    
    
                        /*  filtre ingrédient  */

function initialLoadFilterIngredients(){


    for(let i=0; i<recipes.length; i++){

        for(let j=0; j<recipes[i].ingredients.length; j++){
    
            let ingredient = recipes[i].ingredients[j].ingredient;
    
            ingredient = ingredient.toLowerCase();
    
            if(!ingredients.includes(ingredient)){
                ingredients.push(ingredient);
            }
        }
    }

    

                        /* Intégration filtre ingrédient*/
        
    let wrapper = document.createElement('ul');
    wrapper.id = 'ingredients-filter-type';
    wrapper.classList.add('filter-listing');

    filterIngredients();

    filtreIngredient.appendChild(wrapper);

    function filterIngredients(){
        
        for(let i = 0; i < ingredients.length; i++){
    
            let wrapperLi = document.createElement('li');
            wrapperLi.classList.add('nom-filtre');
            
            wrapperLi.innerText = `
                ${ingredients[i]}
            `
            wrapper.appendChild(wrapperLi);
        }
        
    }
}       
    
                        /*  filtre appareils  */

function initialLoadFilterAppliances(){


    for(let i=0; i<recipes.length; i++){
    
        let appliance = recipes[i].appliance;
    
        appliance = appliance.toLowerCase();
    
        if(!appliances.includes(appliance)){
            appliances.push(appliance);
        }
    } 

                        /* Intégration filtre appareils */

    let wrapperAppliances = document.createElement('ul');
    wrapperAppliances.id = 'appliance-filter-type';
    wrapperAppliances.classList.add('filter-listing');

    filterAppliances()

    filtreAppliance.appendChild(wrapperAppliances);

    function filterAppliances(){
        for(let i = 0; i < appliances.length; i++){
    
            let wrapperLiAppliances = document.createElement('li');
            wrapperLiAppliances.classList.add('nom-filtre');
            
            wrapperLiAppliances.innerText = `
                ${appliances[i]}
            `
            //console.log(wrapperLiAppliances);
            wrapperAppliances.appendChild(wrapperLiAppliances);
        }
    
    }
}
        

        
                            /*  filtre ustensil  */

function initialLoadFilterUstensils(){


    for(let i=0; i<recipes.length; i++){

        for(let j=0; j<recipes[i].ustensils.length; j++){

            let ustensil = recipes[i].ustensils[j];

            ustensil = ustensil.toLowerCase();

            if(!ustensils.includes(ustensil)){
                ustensils.push(ustensil);
            }
        }
    }



                /* Intégration filtre ustensil */

    let wrapperUstensils = document.createElement('ul');
    wrapperUstensils.id = 'ustensils-filter-type';
    wrapperUstensils.classList.add('filter-listing');

    filterUstensils()

    filtreUstensils.appendChild(wrapperUstensils);


    function filterUstensils(){
        for(let i = 0; i < ustensils.length; i++){
    
            let wrapperLiUstensils = document.createElement('li');
            wrapperLiUstensils.classList.add('nom-filtre');
            
            wrapperLiUstensils.innerText = `
                ${ustensils[i]}
            `
            
            wrapperUstensils.appendChild(wrapperLiUstensils);
        }
    }
}
