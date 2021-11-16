/*Create IIFE to avoid accidentally accessing the global state and create new
pokemon repository variable to hold what IIFE will return and assign IIFE
to that variable.*/

const pokemonRepository = (function () {
  const pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


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
    button.classList.add("btn");
    button.setAttribute("data-target", "#exampleModal");
		button.setAttribute("data-toggle", "modal");
    listpokemon.appendChild(button);
    listItem.classList.add("group-list-item");
    pokemonList.appendChild(listpokemon);

//add listener function to create action once user clicks button//
    button.addEventListener('click', function(event) {
      showDetails(pokemon);
    });
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
let modalContainer = document.querySelector('#modal-container');
function showModal(pokemon) {
  modalContainer.innerHTML = '';
  let modal = document.createElement('div');
  modal.classList.add('modal');

  let closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';
  closeButtonElement.addEventListener('click', hideModal);

  let titleElement = document.createElement('h1');
  titleElement.innerText = pokemon.name;

//Create img element//
  let pokemonImg = document.createElement('img');
  pokemonImg.src = pokemon.imageUrl;

  let contentElement = document.createElement('p');
  contentElement.innerText = ('height: ') + pokemon.height;

  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(contentElement);
  modal.appendChild(pokemonImg);

  pokemon.types.forEach(item => {
    let contentElement = document.createElement('p');
    contentElement.innerText = ('Type: ') + item.type.name;
    modal.appendChild(contentElement);
});

  modalContainer.appendChild(modal);


  modalContainer.classList.add('is-visible');
}


//Code to hide Modal//
function hideModal() {
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.remove('is-visible');
}

window.addEventListener('keydown', (e) => {
  let modalContainer = document.querySelector('#modal-container');
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();
  }
});

/*This code listens for clicks on the container. If the target was the container
the modal is hidden*/
modalContainer.addEventListener('click', (e) => {
  /* Since this is also triggered when clicking INSIDE the modal
   We only want to close if the user clicks directly on the overlay*/
  let target = e.target;
  if (target === modalContainer) {
    hideModal();
  }
});

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
    hideModal: hideModal
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
