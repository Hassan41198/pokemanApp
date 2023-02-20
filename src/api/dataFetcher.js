export const getPokemonData = async (id) => {
    try {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json())
    } catch (error) {
        console.log(error)
    }
};