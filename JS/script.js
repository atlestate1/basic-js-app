//Create list of Pokemon characters with height and type attributes//
const pokemonList = [
    {name: 'Charmander', height: 0.6, types: ['fire']},
    {name: 'Beedrill', height: 1.0, types: ['bug','poison']},
    {name: 'Pidgeotto', height: 1.1, types: ['flying', 'normal']},
    {name: 'Nidoran', height: 0.4, types: ['poison']},
    {name: 'Arcanina', height: 1.9, types: ['fire']},
    {name: 'Ho-oh', height: 3.8, types: ['fire', 'flying']}
];


//for loop to iterate over each element in array//

for (const i = 0; i < pokemonList.length; i++) {
  console.log(pokemonList[i].name, pokemonList[i].height,
    pokemonList[i].types);
//write name and height of Pokemon on screen//
  document.write(pokemonList[i].name + " is ", pokemonList[i].height +
    " in height".);
};
