
import { recipes } from "./recipes.js"

        /* Ouverture modale filter listing  */

            /*  Intégration class sur le chevron*/

const chevronsOpen = document.querySelectorAll('.filter-chevron');

chevronsOpen.forEach(chevron => {
    chevron.addEventListener('click', (e) => {
        openListing(e) 
    });
});

function openListing(e){

    const btnIngredients = document.querySelector("#btn-ingredients");
    const btnAppareils = document.querySelector("#btn-appareils");
    const btnUstensiles = document.querySelector("#btn-ustensiles");

    const chevronOpenIngredients = document.querySelector(".chevron-open-ingredients");
    const chevronOpenAppareils = document.querySelector(".chevron-open-appareils");
    const chevronOpenUstensiles = document.querySelector(".chevron-open-ustensiles");

    let chevron= e.target;

    if(chevron.classList.contains('chevron-open-ingredients')){
        chevronOpenAppareils.classList.remove('filter-open-chevron');
        chevronOpenUstensiles.classList.remove('filter-open-chevron');
        chevronOpenIngredients.classList.toggle('filter-open-chevron');
    
        chevronOpenIngredients.classList.toggle('filter-open-chevron-active');
        chevronOpenAppareils.classList.remove('filter-open-chevron-active');
        chevronOpenUstensiles.classList.remove('filter-open-chevron-active');
        
        openActiveListing();
    }
    else if(chevron.classList.contains('chevron-open-appareils')){
        chevronOpenAppareils.classList.toggle('filter-open-chevron');
        chevronOpenUstensiles.classList.remove('filter-open-chevron');
        chevronOpenIngredients.classList.remove('filter-open-chevron');
    
        chevronOpenAppareils.classList.toggle('filter-open-chevron-active');  
        chevronOpenIngredients.classList.remove('filter-open-chevron-active');  
        chevronOpenUstensiles.classList.remove('filter-open-chevron-active');  

        openActiveListing();

    }
    else if(chevron.classList.contains('chevron-open-ustensiles')){
        chevronOpenAppareils.classList.remove('filter-open-chevron');
        chevronOpenUstensiles.classList.toggle('filter-open-chevron');
        chevronOpenIngredients.classList.remove('filter-open-chevron');
    
        chevronOpenUstensiles.classList.toggle('filter-open-chevron-active');
        chevronOpenAppareils.classList.remove('filter-open-chevron-active');
        chevronOpenIngredients.classList.remove('filter-open-chevron-active');

        openActiveListing();
    }
}



        /* Action sur les listes ingrédients / appareils / ustensiles*/

            /*  
                Permet d'ouvrir la bonne box et de mettre la bonne disposition : remonter la bonne filter-search et faire disparaitre le bon filter-btn ; de plus 
                permet de redonner une bonne taille pour filters-listing car est en position:relative avec une height et overflow:hidden  
            */


function openActiveListing(){

    const listingIngredientAppliancesUstensils = document.querySelector('#filters-listing');

    const searchIngredients = document.querySelector('#search-ingredients');
    const searchAppareils = document.querySelector('#search-appareils');
    const searchUstensiles = document.querySelector('#search-ustensiles');

    const chevronIngredients = document.querySelector('#btn-ingredients i');
    const chevronAppliances = document.querySelector('#btn-appareils i');
    const chevronUstensils = document.querySelector('#btn-ustensiles i');

    const btnIngredients = document.querySelector("#btn-ingredients");
    const btnAppareils = document.querySelector("#btn-appareils");
    const btnUstensiles = document.querySelector("#btn-ustensiles");

    const divIngredients = document.querySelector('#ingredients');
    const divAppliances = document.querySelector('#appliances');
    const divUtensils = document.querySelector('#utensils');

    if(
        chevronIngredients.classList.contains('filter-open-chevron') ||
        chevronAppliances.classList.contains('filter-open-chevron') ||
        chevronUstensils.classList.contains('filter-open-chevron')
    ){
        listingIngredientAppliancesUstensils.style.height = "250px";
    }


    if(chevronIngredients.classList.contains('filter-open-chevron')){
        searchAppareils.classList.remove('active');
        searchUstensiles.classList.remove('active');
        searchIngredients.classList.add('active');

        btnIngredients.classList.add('active');

        divIngredients.style.width = "350px";
        divAppliances.style.width = "200px";
        divUtensils.style.width = "200px";

        chevronAppliances.classList.remove("active");
        chevronUstensils.classList.remove("active");
        chevronIngredients.classList.add("active");
        
        
    }
    else if(chevronAppliances.classList.contains('filter-open-chevron')){
        searchIngredients.classList.remove('active');
        searchUstensiles.classList.remove('active');
        searchAppareils.classList.add('active');
        btnAppareils.classList.add('active');

        divIngredients.style.width = "200px";
        divAppliances.style.width = "350px";
        divUtensils.style.width = "200px";

        chevronAppliances.classList.add("active");
        chevronUstensils.classList.remove("active");
        chevronIngredients.classList.remove("active");
        
    }
    else if(chevronUstensils.classList.contains('filter-open-chevron')){
        searchIngredients.classList.remove('active');
        searchAppareils.classList.remove('active');
        searchUstensiles.classList.add('active');
        btnUstensiles.classList.add('active');

        divIngredients.style.width = "200px";
        divAppliances.style.width = "200px";
        divUtensils.style.width = "350px";

        chevronAppliances.classList.remove("active");
        chevronUstensils.classList.add("active");
        chevronIngredients.classList.remove("active");
        
        
    }
    else if(
        !chevronIngredients.classList.contains('filter-open-chevron') ||
        !chevronAppliances.classList.contains('filter-open-chevron') ||
        !chevronUstensils.classList.contains('filter-open-chevron')
    ){
        searchIngredients.classList.remove('active');
        searchAppareils.classList.remove('active');
        searchUstensiles.classList.remove('active');

        chevronAppliances.classList.remove("active");
        chevronUstensils.classList.remove("active");
        chevronIngredients.classList.remove("active");

        btnIngredients.classList.remove('active');
        btnAppareils.classList.remove('active');
        btnUstensiles.classList.remove('active');

        divIngredients.style.width = "200px";
        divAppliances.style.width = "200px";
        divUtensils.style.width = "200px";

        listingIngredientAppliancesUstensils.style.height = "100px";
    }


    if(chevronIngredients.classList.contains('filter-open-chevron-active')){
        btnAppareils.classList.remove('active');
        btnUstensiles.classList.remove('active');
    } else if(chevronAppliances.classList.contains('filter-open-chevron-active')){
        btnIngredients.classList.remove('active');
        btnUstensiles.classList.remove('active');
    } else if(chevronUstensils.classList.contains('filter-open-chevron-active')){
        btnIngredients.classList.remove('active');
        btnAppareils.classList.remove('active');
    }

}




        /*  Intégration carte dynamique  */


const listPlats = document.querySelector('#liste-plats');

console.log(recipes)  


for(let i = 0; i < recipes.length; i++){  


    //console.log(recipes[i].ingredients);

    let wrapper = document.createElement('article');
    wrapper.classList.add('plat');

    //console.log(wrapper);

        wrapper.innerHTML = `

            <div class="image-plat"></div>
            <div class="description-plat">
                <h2 class="titre-plat">${recipes[i].name}</h2>
                <p class="temps-preparation">
                    <i class="fas fa-light fa-clock"></i>
                    <span>${recipes[i].time} min</span>
                </p>
                <div class="liste-ingredient"></div>
                <div class="recette">
                    <p>${recipes[i].description}</p>
                </div>
            </div>

        `

    listPlats.appendChild(wrapper);

}

console.log(recipes[3].ingredients[2].ingredient)
console.log(recipes[3].ingredients[2].quantity)
console.log(recipes[3].ingredients[2].unit)



let listeIngredient = document.querySelectorAll('.liste-ingredient');

listeIngredient.forEach(element => {

    for(let i=0; i<recipes.length; i++){

        //console.log(recipes.length)

        if(1==1){}

        for(let j=0; j<recipes[i].ingredients.length; j++){

        console.log(recipes[1].ingredients)

        //console.log(listeIngredient.length);

            let wrapper = document.createElement('p');

            if(recipes[i] == i){

                wrapper.innerHTML = `
                    <span class="type-ingredient">${ recipes[i].ingredients[j].ingredient }</span>
                    <span class="nombre-ingredient">${ recipes[i].ingredients[j].quantity } ${ recipes[i].ingredients[j].unit ? recipes[i].ingredients[j].unit : "" }</span>
                `
                element.appendChild(wrapper);
            }
        }
    }

});

