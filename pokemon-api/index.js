document.querySelector('button').addEventListener('click',generateCard)

function generateCard(){
    const count=document.querySelector('input').value
    const category=document.getElementById('category').value
    const card=document.getElementById('cards')

    card.innerHTML=""

    const url=`https://pokeapi.co/api/v2/type/${category}`

    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      const pokemonList=data.pokemon.slice(0,count)

      const promises = pokemonList.map(p =>
                fetch(p.pokemon.url).then(res => res.json())
            );
            return Promise.all(promises);
        })

        .then(pokemonDetails => {
            pokemonDetails.forEach(pokemon => {
                card.innerHTML = `
                    <h3>${pokemon.name}</h3>
                    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                    <p>Type: ${pokemon.types.map(t => t.type.name).join(', ')}</p>
                `;
            });
        })
      
    .catch(err=>{
      console.log(`error ${err}`)
    })
}