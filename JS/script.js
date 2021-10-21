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
  return {
    getAll: getAll,
    add: add
  };
})();

pokemonRepository.add({ name: 'Ponyta', height: 1.0, types: ['fire'] });
pokemonList = pokemonRepository.getAll();

//Use foreach loop instead of for loop to iterate over Pokemon List//

function myPokemon(pokemon) {
  document.write(pokemon.name + ' is ' + pokemon.height + ' inches tall ' +
  'and special powers are '  + pokemon.types + '.', '<br>');
}
pokemonList.forEach(myPokemon);
