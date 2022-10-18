

const globalFilter = document.querySelector('#champ-recherch');

let recipesActif = recipes;



        /*  Intégration carte dynamique  */


window.addEventListener('load', function() {
    LoadCard();
    initialLoadFilter(recipesActif);
});
        
globalFilter.addEventListener('input', function(e) {

    filterDataLoadingCard(e);
    LoadCard();
    initialLoadFilter(recipesActif);

    let tagUl = document.querySelector('.tagUl');
    tagUl.innerHTML = "";
    tags = [];
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
            recipesActif.push(element);
        } 
        
        if(valide == false) {
            for(ingredient of element.ingredients){
                if(ingredient.ingredient.toLowerCase().includes(filterActive)){ 
                    recipesActif.push(element);
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




function LoadCard(){
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
                        <span class="type-ingredient">${ recipesActif[i].ingredients[j].ingredient } </span>
                        <span class="nombre-ingredient">: ${ recipesActif[i].ingredients[j].quantity ? recipesActif[i].ingredients[j].quantity : recipesActif[i].ingredients[j].quantite } ${ recipesActif[i].ingredients[j].unit ? recipesActif[i].ingredients[j].unit : "" }</span>
                    `

                    if(!recipesActif[i].ingredients[j].quantity && !recipesActif[i].ingredients[j].quantite){
                        wrapper.childNodes[3].innerText = "";
                    }

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

function initialLoadFilter(param){
    initialLoadFilterIngredients(param);
    initialLoadFilterAppliances(param);
    initialLoadFilterUstensils(param);
}     



                        /*  filtre ingrédient  */

function initialLoadFilterIngredients(param){

    ingredients = [];

    //console.log(recipesActif)

    for(let i=0; i<param.length; i++){

        for(let j=0; j<param[i].ingredients.length; j++){

            //console.log(param[i].ingredients);
    
            let ingredient = param[i].ingredients[j].ingredient;
    
            ingredient = ingredient.toLowerCase().replace("î", 'i').normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
            if(!ingredients.includes(ingredient)){
                ingredients.push(ingredient);
            }
        }
    }



                        /* Intégration filtre ingrédient*/

    
    let wrapper = document.createElement('ul');
    wrapper.id = 'ingredients-filter-type';
    wrapper.classList.add('filter-listing');

    filtreIngredient.innerHTML = ""

    filterIngredients();

    filtreIngredient.appendChild(wrapper);


    function filterIngredients(){

        //console.log(ingredients);
        
        for(let i = 0; i < ingredients.length; i++){
    
            let wrapperLi = document.createElement('li');
            wrapperLi.classList.add('nom-filtre');
            
            wrapperLi.innerText = `${ingredients[i]}`

            wrapperLi.addEventListener("click", function(e){
                ingredientsTag(e);
            })
            wrapper.appendChild(wrapperLi);
        }
        
    }
}       
    
                        /*  filtre appareils  */

function initialLoadFilterAppliances(param){

    appliances = [];

    for(let i=0; i<param.length; i++){
    
        let appliance = param[i].appliance;

        appliance = appliance.toLowerCase();
    
        if(!appliances.includes(appliance)){
            appliances.push(appliance);
        }
    } 

                        /* Intégration filtre appareils */

    let wrapperAppliances = document.createElement('ul');
    wrapperAppliances.id = 'appliance-filter-type';
    wrapperAppliances.classList.add('filter-listing');

    filtreAppliance.innerHTML = "";

    filterAppliances()

    filtreAppliance.appendChild(wrapperAppliances);

    function filterAppliances(){

        //console.log(appliances);

        for(let i = 0; i < appliances.length; i++){
    
            let wrapperLiAppliances = document.createElement('li');
            wrapperLiAppliances.classList.add('nom-filtre');
            
            wrapperLiAppliances.innerText = `${appliances[i]}`
            wrapperLiAppliances.addEventListener("click", function(e) {
                appliancesTag(e);
            })
            
            wrapperAppliances.appendChild(wrapperLiAppliances);
        }
    }
}

        
                            /*  filtre ustensil  */

function initialLoadFilterUstensils(param){

    ustensils = [];

    for(let i=0; i<param.length; i++){

        for(let j=0; j<param[i].ustensils.length; j++){

            let ustensil = param[i].ustensils[j];

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

    filtreUstensils.innerHTML = "";

    filterUstensils()

    filtreUstensils.appendChild(wrapperUstensils);


    function filterUstensils(){
        for(let i = 0; i < ustensils.length; i++){
    
            let wrapperLiUstensils = document.createElement('li');
            wrapperLiUstensils.classList.add('nom-filtre');
            
            wrapperLiUstensils.innerText = `${ustensils[i]}`
            wrapperLiUstensils.addEventListener("click", function(e) { 
                ustensilsTag(e);
            })
            
            wrapperUstensils.appendChild(wrapperLiUstensils);
        }
    }
}
