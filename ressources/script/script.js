

        /* Ouverture modale filter listing  */

            /*  Intégration class sur le chevron*/

const chevronsOpen = document.querySelectorAll('.filter-chevron');

chevronsOpen.forEach(chevron => {
    chevron.addEventListener('click', (e) => {
        openListing(e) 
    });
});

function openListing(e){

    const chevronOpenIngredients = document.querySelector(".chevron-open-ingredients");
    const chevronOpenAppareils = document.querySelector(".chevron-open-appareils");
    const chevronOpenUstensiles = document.querySelector(".chevron-open-ustensiles");

    let chevron= e.target;

    if(chevron.classList.contains('chevron-open-ingredients')){
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
        if(window.matchMedia("(min-width: 740px)").matches){
            listingIngredientAppliancesUstensils.style.height = "280px";
        } else {
            listingIngredientAppliancesUstensils.style.height = "580px";
        }
    } 


    if(chevronIngredients.classList.contains('filter-open-chevron')){
        searchAppareils.classList.remove('active');
        searchUstensiles.classList.remove('active');
        searchIngredients.classList.add('active');

        btnIngredients.classList.add('active');

        if(window.matchMedia("(min-width: 740px)").matches){
            divIngredients.style.width = "50%";
            divAppliances.style.width = "200px";
            divUtensils.style.width = "200px";
        } else {
            divIngredients.style.width = "90%";
            divIngredients.style.marginTop = "0px";
            divAppliances.style.width = "200px";
            divAppliances.style.marginTop = "230px";
            divUtensils.style.width = "200px";
            divUtensils.style.marginTop = "0px";
        }

        chevronAppliances.classList.remove("active");
        chevronUstensils.classList.remove("active");
        chevronIngredients.classList.add("active");
        
        
    }
    else if(chevronAppliances.classList.contains('filter-open-chevron')){
        searchIngredients.classList.remove('active');
        searchUstensiles.classList.remove('active');
        searchAppareils.classList.add('active');
        btnAppareils.classList.add('active');

        if(window.matchMedia("(min-width: 740px)").matches){
            divIngredients.style.width = "200px";
            divAppliances.style.width = "480px";
            divUtensils.style.width = "200px";
        } else {
            divIngredients.style.width = "200px";
            divAppliances.style.width = "90%";
            divUtensils.style.width = "200px";
            divIngredients.style.marginTop = "0px";
            divAppliances.style.marginTop = "0px";
            divUtensils.style.marginTop = "230px";
        }

        divIngredients.style.width = "200px";
        divAppliances.style.width = "480px";
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

        if(window.matchMedia("(min-width: 740px)").matches){
            divIngredients.style.width = "200px";
            divAppliances.style.width = "200px";
            divUtensils.style.width = "480px";
        } else {
            divIngredients.style.width = "200px";
            divAppliances.style.width = "200px";
            divUtensils.style.width = "90%";
            divIngredients.style.marginTop = "0px";
            divAppliances.style.marginTop = "0px";
            divUtensils.style.marginBottom = "230px";
        }

        divIngredients.style.width = "200px";
        divAppliances.style.width = "200px";
        divUtensils.style.width = "480px";

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

        if(window.matchMedia("(min-width: 740px)").matches){
            divIngredients.style.width = "200px";
            divAppliances.style.width = "200px";
            divUtensils.style.width = "200px";    
        } else {
            divIngredients.style.width = "200px";
            divAppliances.style.width = "200px";
            divUtensils.style.width = "200px";    
            divIngredients.style.marginTop = "0px";
            divAppliances.style.marginTop = "0px";
            divUtensils.style.marginTop = "0px";
            divUtensils.style.marginBottom = "0px";
        }

        divIngredients.style.width = "200px";
        divAppliances.style.width = "200px";
        divUtensils.style.width = "200px";

        if(window.matchMedia("(min-width: 740px)").matches){
            listingIngredientAppliancesUstensils.style.height = "100px";
        } else {
            listingIngredientAppliancesUstensils.style.height = "350px";
        }
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


