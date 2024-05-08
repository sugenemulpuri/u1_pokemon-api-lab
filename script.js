let button = document.querySelector("#searchButton");

button.addEventListener('click', async () => {
    // let pokemonName = document.querySelector("#pokemonName");
    let pokemonImage = document.querySelector("#pokemonImage");
    let textInput = document.querySelector("#inputBar").value.toLowerCase();

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${textInput}`);
        if (!response.ok) {
            throw new Error('Pokemon not found!');
        }
        const data = await response.json();
        // pokemonName.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        pokemonImage.src = data.sprites.front_default;
        pokemonImage.alt = data.name;
    } catch (error) {
        alert(error.message);
    }
});
