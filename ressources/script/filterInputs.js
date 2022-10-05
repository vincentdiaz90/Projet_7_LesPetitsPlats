        // Création des tags correspondant au clique

let tags = [];
let liTag= [];

let uniqueValeurTag;


function ingredientsTag(e){
    
    let variable = e.target.innerText;
    tags.push('ingredients_' + variable);
    createTag(variable);
    deletTag();
    filterTags();
}

function appliancesTag(e){

    let variable = e.target.innerText;
    tags.push('appliances_'+variable);
    createTag(variable);
    deletTag();
    filterTags()
}

function ustensilsTag(e){

    let variable = e.target.innerText;
    tags.push('ustensils_'+variable);
    createTag(variable);
    deletTag();
    filterTags()
}


function createTag(tagName){

    let divTagUl = document.querySelector('.tagUl');

    let wrapperLiTag;
    let wrapperLiTagCross;

    wrapperLiTag = document.createElement('li');
    wrapperLiTag.classList.add('tagLi');
    wrapperLiTag.setAttribute("tagName", tagName);

    wrapperLiTag.innerText = `${tagName}`;

    wrapperLiTagCross = document.createElement('i');
    wrapperLiTagCross.classList.add('fa-solid');
    wrapperLiTagCross.classList.add('fa-x');

    wrapperLiTag.appendChild(wrapperLiTagCross);

    divTagUl.appendChild(wrapperLiTag);


    let ingredientsFiltreActif = document.querySelectorAll("#ingredients-filter-type .nom-filtre");

    let wrapperLiTagEnsemble = document.querySelectorAll(".tagLi");

    ingredientsFiltreActif.forEach(ingredientFiltreActif => {
        wrapperLiTagEnsemble.forEach(wrapperLiTagUnique => {          
            if(wrapperLiTagUnique.innerText == ingredientFiltreActif.innerText.toLowerCase()){
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


function filterTags() {

        // Intégration dans un tableau des tags actifs

    let divTagUl = document.querySelector('.tagUl');
    divTagUl = "";
    
    let recipesForActifTag = [];

    let tagLi = "";
    tagLi = document.querySelectorAll(".tagLi");

    tagLi.forEach(li => {

        recipes.forEach(recipe => {

            recipe.ingredients.forEach(ingredient => {
                if(ingredient.ingredient.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') == li.innerText.replace(/[^a-zA-Z0-9]/g, '')){
                    recipesForActifTag.push(recipe);
                }
            });

            if(recipe.appliance.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') == li.innerText.replace(/[^a-zA-Z0-9]/g, '')){
                recipesForActifTag.push(recipe);
            }

            recipe.ustensils.forEach(ustensil => {
                if(ustensil.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') == li.innerText.replace(/[^a-zA-Z0-9]/g, '')){
                    recipesForActifTag.push(recipe);
                }
            })

        });
        
    });

    recipesForActifTag = [...new Set(recipesForActifTag)];


    
        // Intégration des cartes correspondant aux tags dans le tableau

    const listPlats = document.querySelector('#liste-plats');
    listPlats.innerHTML = "";

    if(tagLi.length != 0){

        recipesForActifTag.forEach(element => {
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
            
            for(let i = 0; i < recipesForActifTag.length; i++){
                
                if( k == i ){
            
                    for(let j=0; j<recipesForActifTag[i].ingredients.length; j++){
    
                        let wrapper = document.createElement('p');
            
                        wrapper.innerHTML = `
                            <span class="type-ingredient">${ recipesForActifTag[i].ingredients[j].ingredient } </span>
                            <span class="nombre-ingredient">: ${ recipesForActifTag[i].ingredients[j].quantity ? recipesForActifTag[i].ingredients[j].quantity : recipesForActifTag[i].ingredients[j].quantite } ${ recipesForActifTag[i].ingredients[j].unit ? recipesForActifTag[i].ingredients[j].unit : "" }</span>
                        `
    
                        if(!recipesForActifTag[i].ingredients[j].quantity && !recipesForActifTag[i].ingredients[j].quantite){
                            wrapper.childNodes[3].innerText = "";
                        }
    
                        listeIngredient[k].appendChild(wrapper);
            
                    }
                }
            
            }
        }
    } else {
        LoadCard();
        initialLoadFilter();
    }


}








// function filterByTag(){

//     recipes.forEach(recipe => {

//             uniqueValeurTag.forEach(tab => {
                
//                 let tabType = tab.split('_');

//                 if(tabType[0] == 'ingredients'){   
//                     recipe.ingredients.forEach( ingredient => {
//                         if(ingredient.ingredient.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').includes(tabType[1].toLowerCase().replace(/[^a-zA-Z0-9]/g, ''))) {
//                             nvTableau.push(recipe);
//                         }
//                     });                    
//                 }
    
//                 else if(tabType[0] == 'appliances'){           
//                     if(recipe.appliance.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').includes(tabType[1].toLowerCase().replace(/[^a-zA-Z0-9]/g, ''))){
//                         nvTableau.push(recipe);
//                     }
//                 }
//                 else if(tabType[0] == 'ustensils'){    
//                     recipe.ustensils.forEach(ustensil => {
//                         if(ustensil.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').includes(tabType[1].toLowerCase().replace(/[^a-zA-Z0-9]/g, ''))){
//                             nvTableau.push(recipe);
//                         }
//                     });
//                 }
//             });
//         });

//     nvTableau = [...new Set(nvTableau)];
//     console.log(nvTableau);

// }


// function loadCardByTag(){

//     const listPlats = document.querySelector('#liste-plats');

//     listPlats.innerHTML = "";

//     for(let i = 0; i < nvTableau.length; i++){  
    
//         let wrapper = document.createElement('article');
//         wrapper.classList.add('plat');
    
//             wrapper.innerHTML = `
//                 <div class="image-plat"></div>
//                 <div class="description-plat">
//                     <h2 class="titre-plat">${nvTableau[i].name}</h2>
//                     <p class="temps-preparation">
//                         <i class="fas fa-light fa-clock"></i>
//                         <span>${nvTableau[i].time} min</span>
//                     </p>
//                     <div class="liste-ingredient"></div>
//                     <div class="recette">
//                         <p>${nvTableau[i].description}</p>
//                     </div>
//                 </div>
//             `
    
//         listPlats.appendChild(wrapper);
    
//     }

//     let listeIngredient = document.querySelectorAll('.liste-ingredient');



//     for(let k = 0; k < listeIngredient.length; k++){
        
//         for(let i = 0; i < nvTableau.length; i++){
            
//             if( k == i ){
        
//                 for(let j=0; j<nvTableau[i].ingredients.length; j++){

//                     let wrapper = document.createElement('p');
        
//                     wrapper.innerHTML = `
//                         <span class="type-ingredient">${ nvTableau[i].ingredients[j].ingredient } </span>
//                         <span class="nombre-ingredient">: ${nvTableau[i].ingredients[j].quantity ? nvTableau[i].ingredients[j].quantity : nvTableau[i].ingredients[j].quantite } ${ nvTableau[i].ingredients[j].unit ? nvTableau[i].ingredients[j].unit : "" }</span>
//                     `

//                     if(!nvTableau[i].ingredients[j].quantity && !nvTableau[i].ingredients[j].quantite){
//                         wrapper.childNodes[3].innerText = "";
//                     }

//                     listeIngredient[k].appendChild(wrapper);
        
//                 }
//             }
        
//         }
//     }
// }