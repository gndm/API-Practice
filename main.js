console.log("we are linked")

fetch('http://taco-randomizer.herokuapp.com/random/')
.then(function(response){
    return response.json();
})

.then(function (json){
    let posts = json;
    console.log(posts);
    
        let nameShell = posts.shell.name;
        let recipeShell = posts.shell.recipe;

        let shellTitle = document.getElementById("titleShell");
        shellTitle.innerText = ("Shell: "+ nameShell);
        let shellRecipe = document.getElementById("recipeShell");
        shellRecipe.innerText = ("Recipe: "+ recipeShell);
        

        let nameSea = posts.seasoning.name;
        let recipeSea = posts.seasoning.recipe;

        let seaTitle = document.getElementById("titleSea");
        seaTitle.innerText = ("Seasoning: "+ nameSea);
        let seaRecipe = document.getElementById("recipeSea");
        seaRecipe.innerText = ("Recipe: "+ recipeSea);

        let nameMix = posts.mixin.name;
        let recipeMix = posts.mixin.recipe;

        let mixTitle = document.getElementById("titleMix");
        mixTitle.innerText = ("Mixin': "+ nameMix);
        let mixRecipe = document.getElementById("recipeMix");
        mixRecipe.innerText = ("Recipe: "+ recipeMix);
        
        let nameBL = posts.base_layer.name;
        let recipeBL = posts.base_layer.recipe;

        let blTitle = document.getElementById("titleBL");
        blTitle.innerText = ("Base Layer: "+ nameBL);
        let blRecipe = document.getElementById("recipeBL");
        blRecipe.innerText = ("Recipe: "+ recipeBL);
       
        let nameCon = posts.condiment.name;
        let recipeCon = posts.condiment.recipe;

        let conTitle = document.getElementById("titleCon");
        conTitle.innerText = ("Base Layer: "+ nameCon);
        let conRecipe = document.getElementById("recipeCon");
        conRecipe.innerText = ("Recipe: "+ recipeCon);
})