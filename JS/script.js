/*Create IIFE to avoid accidentally accessing the global state and create new
pokemon repository variable to hold what IIFE will return and assign IIFE
to that variable.*/

const pokemonRepository = (function () {
  const pokemonList = [
    {
      name: 'Charmander',
      height: 0.6,
      types: ['fire']
    },
    {
      name: 'Beedrill',
      height: 1.0,
      types: ['bug','poison']
    },
    {
      name: 'Pidgeotto',
      height: 1.1,
      types: ['flying', 'normal']
    },
    {
      name: 'Nidoran',
      height: 0.4,
      types: ['poison']
    },
    {
      name: 'Arcanina',
      height: 1.9,
      types: ['fire']
    },
    {
      name: 'Ho-oh',
      height: 3.8,
      types: ['fire', 'flying']
    }
  ];

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

/*Add function to call at the end in the loop function.  This function creates
the buttons for each pokemon*/
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);

//add listener function to create action once user clicks button//
    button.addEventListener('click', function(event) {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    console.log(pokemon.name);
  }
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Ponyta', height: 1.0, types: ['fire'] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
