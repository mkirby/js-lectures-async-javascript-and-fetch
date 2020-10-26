document.querySelector("button").addEventListener("click", () => {
  const input = document.querySelector("#input")
  const id = input.value

  console.log("BEFORE fetch")

  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(pokemon => {
      console.log("INSIDE fetch")
      renderPokemon(pokemon)
    })

  console.log("AFTER fetch")
})

function renderPokemon(pokemon) {
  console.log(pokemon.name)
  const name = document.querySelector("#name")
  name.textContent = pokemon.name
}

// console.log("BEFORE fetch")



// const promise = fetch('https://pokeapi.co/api/v2/pokemon/1')

// promise
//   .then(response => {
//     // const promise2 = response.json()
//     // console.log(response)

//     // promise2.then(data => {
//     //   console.log(data)
//     // })
//     return "hello"
//   })
//   .then(data => {
//     console.log(data)
//   })





// console.log("AFTER fetch")


// console.log("BEFORE setTimeout")

// setTimeout(
//   () => {
//     console.log("INSIDE setTimeout")
//   }
// , 0)

// console.log("AFTER setTimeout")

