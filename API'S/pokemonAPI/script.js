"use strict";

async function fetchPokemons() {
  const container = document.getElementById("pokemonContainer");
  container.innerHTML = "";

  for (let i = 1; i <= 50; i++) {
    let api = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(api);
    let data = await response.json();

    container.innerHTML += `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div class="card h-100 text-center">
          <img src="${data.sprites.front_default}" class="card-img-top" style="width:150px;height:150px;margin:auto;" alt="${data.name}">
          <div class="card-body">
            <h5 class="card-title">${data.name.toUpperCase()}</h5>
            <a href="details.html?id=${i}" class="btn btn-primary">View Details</a>
          </div>
        </div>
      </div>`;
  }
}

fetchPokemons();

// Fetch details for the Pokémon
async function fetchPokemonDetails() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (id) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let data = await response.json();

    let speciesResponse = await fetch(data.species.url);
    let speciesData = await speciesResponse.json();

    document.getElementById("pokemonDetails").innerHTML = `
      <h2 class="card-title">${data.name.toUpperCase()} Details</h2>
      <img src="${data.sprites.front_default}" class="card-img-top" style="width:200px;height:200px;" alt="${data.name}">
      <div class="card-body">
        <p><strong>National Number:</strong> ${speciesData.id}</p>
        <p><strong>Type:</strong> ${data.types.map(t => t.type.name).join(", ")}</p>
        <p><strong>Height:</strong> ${data.height / 10} meters</p>
        <p><strong>Weight:</strong> ${data.weight / 10} kg</p>
        <p><strong>Abilities:</strong> ${data.abilities.map(a => a.ability.name).join(", ")}</p>
      </div>`;
  }
}

fetchPokemonDetails();
