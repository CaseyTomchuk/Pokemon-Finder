const docUserStuff = document.getElementById("userStuff")
/*const findButton = document.getElementById("findButton");

findButton.addEventListener("click", function() {
    console.log("Found!");
}); */

/* fetch("https://pokeapi.co/api/v2/pokemon/gengar")
    .then(response => {

        if (!response.ok){
           throw new Error("Could not fetch resource", response.statusText); 
        }
        return response.json();
    })
    .then(data => console.log(data.weight))
    .catch(error => console.error("Whoops: ", error)); */

// throwing and catching errors.
// response is an object with a boolean "ok" status (ex: 200) statusText, etc. it can be logged to console
// https://4geeks.com/lesson/the-fetch-javascript-api

async function fetchData() {

    try {

        const pokemonName = document.getElementById("inputField").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if(!response.ok){
            throw new Error("Error message bruh");
        }
// Explain (what the hell is await)
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imageElement = document.getElementById("pokemonSprite");
//Explain
        imageElement.src = pokemonSprite;
        imageElement.style.display = "block";

    }
    catch(error) {
        console.error(error);
    }

    const shinyButton = document.createElement("button");
    shinyButton.textContent = "Make it Shiny!"
    docUserStuff.appendChild(shinyButton);
    // change background color to gold!

    shinyButton.addEventListener("click", function() {
        imageElement.src = pokemonSprite; // think I need to fetch the JSon again
        docUserStuff.removeChild(shinyButton);
    })
};

// https://www.youtube.com/watch?v=37vxWr0WgQk 
// <img src = "" alt = "Pokemon Sprite" id ="pokemonSprite" style = "display: none">