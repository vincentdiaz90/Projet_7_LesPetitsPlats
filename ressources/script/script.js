const chevronsOpen = document.querySelectorAll('.filter-open-chevron');

console.log(chevronsOpen);

chevronsOpen.forEach(chevron => {
    chevron.addEventListener('click', (e) => {
        openListing(e) 
    });
});

function openListing(e){

    const chevronOpenIngredients = document.querySelector('.chevron-open-ingredients');
    const chevronOpenAppareils = document.querySelector('.chevron-open-appareils');
    const chevronOpenUstensiles = document.querySelector('.chevron-open-ustensiles');

    let chevron= e.target;

    if(chevron.classList.contains('chevron-open-ingredients')){
        
    }
    else if(chevron.classList.contains('chevron-open-appareils')){
        document.querySelector('#search-appareils').style.display('block');
        document.querySelector('#btn-appareils').style.display('none');
    }
    else if(chevron.classList.contains('chevron-open-ustensiles')){
        document.querySelector('#search-ustensiles').style.display('block');
        document.querySelector('#btn-ustensiles').style.display('none');
    }
}