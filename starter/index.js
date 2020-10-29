document.querySelector("button").addEventListener("click", () => {
  const input = document.querySelector("#input")
  const id = input.value
  //fetch returns a promise that data is coming
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(pokemon => {
      renderPokemon(pokemon)
    })
})

function renderPokemon(pokemon) {
  console.log(pokemon.name)
  const name = document.querySelector("#name")
  name.textContent = pokemon.name
}

// console.log("BEFORE setTimeout")

// setTimeout(() => {
//   console.log("1. Inside setTimeout!")
//   console.log("2. Inside setTimeout!")
//   console.log("3. Inside setTimeout!")
// }, 0)

// console.log("After setTimeout")
