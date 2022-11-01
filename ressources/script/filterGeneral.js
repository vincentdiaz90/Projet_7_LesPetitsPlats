
//console.log(recipesActif);
//console.log(recipesForActifTag);

let recipesConjoint;


function tabConjoint(){

    recipesConjoint = [];

    recipesActif.forEach(tabPrimaryInput => {
        //console.log(tabPrimaryInput.id);
        recipesForActifTag.forEach(tabSecondaryInput => {
            //console.log(tabSecondaryInput.id);
            if(tabPrimaryInput.id == tabSecondaryInput.id){
                recipesConjoint.push(tabSecondaryInput)
                //console.log(recipesConjoint);
                //console.log('tabPrimaryInput.id', tabPrimaryInput.id);
                //console.log('tabSecondaryInput.id', tabSecondaryInput.id);
            }
        });
    });
}
