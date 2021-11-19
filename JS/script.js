/*Create IIFE to avoid accidentally accessing the global state and create new
pokemon repository variable to hold what IIFE will return and assign IIFE
to that variable.*/

const pokemonRepository = (function () {
  const pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';


  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

/*Add function to call at the end in the loop function.  This function creates
the buttons for each pokemon*/
  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.list-group');
    let listItem = document.createElement('li');
    listItem.classList.add("group-list-item");
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class', 'btn', 'btn-primary', 'btn-lg');
    button.setAttribute("data-target", "#exampleModal");
		button.setAttribute('data-toggle', 'modal');
  //add listener function to create action once user clicks button//
    button.addEventListener('click', function(event) {
      showDetails(pokemon);
    });

    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }
  function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
    showModal(pokemon);
  });
}

//Code to create modal//
function showModal(pokemon) {
  let modalTitle = $(".modal-title");
  let modalBody = $(".modal-body");
  let modalHeader = $(".modal-header");

  modalTitle.empty();
  modalBody.empty();

  //Create img element//
  let imageElement = $('<img class = "modal-img" style="width:50%">')
  imageElement.attr("src", pokemon.imageUrl);

  let titleElement = $('<h1>' + pokemon.name + '</h1');

  let contentElement = $('<p>' + "Height : " + pokemon.height + '</p>');

  let powersElement = $('<p>' + "Special Powers : " + pokemon.types [""] + '</p>')


  modalTitle.append(titleElement);
  modalBody.append(imageElement);
  modalBody.append(contentElement);
  modalBody.append(powersElement);

};

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
