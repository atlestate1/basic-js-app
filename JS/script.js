const pokemonList = [
    {name: 'Charmander', height: 0.6, types: ['fire']},
    {name: 'Beedrill', height: 1.0, types: ['bug','poison']},
    {name: 'Pidgeotto', height: 1.1, types: ['flying', 'normal']},
    {name: 'Nidoran', height: 0.4, types: ['poison']},
    {name: 'Arcanine', height: 1.9, types: ['fire']},
    {name: 'Ho-oh', height: 3.8, types: ['fire', 'flying']}
]

//Use foreach loop instead of for loop to iterate over Pokemon List//

function myPokemon(pokemon) {
  document.write(pokemon.name + ' is ' + pokemon.height + ' inches tall ' +
  'and special powers are '  + pokemon.types + '.', '<br>');
}
pokemonList.forEach(myPokemon);


/*Create for loop to identify which Pokemon characters are larger than size
in for loop and attach a message stating the character is big*/

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 1.5 && pokemonList[i].height < 2.5)
  document.write(pokemonList[i].name + " ", pokemonList[i].height +
    " Wow, that's big!!", '<br>')
  if (pokemonList[i].height > 2.5)
  document.write(pokemonList[i].name + " ", pokemonList[i].height +
    " Wow, that's HUGE!!", '<br>');
};

/*Create IIFE to avoid accidentally accessing the global state and create new
pokemon repository variable to hold what IIFE will return and assign IIFE
to that variable.*/

let pokemonRepository = (function () {
  let pokemonList = [
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

console.log( pokemonRepository.getAll() );
pokemonRepository.add({ name: 'Ponyta', height: 1.0, types: ['fire'] });
