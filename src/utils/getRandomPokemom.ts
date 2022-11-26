const MAX_DEX_ID = 493

export const getRandomPokemom = (notThisOne?: number): number => {
    const pokedexNumber = Math.floor(Math.random() * (MAX_DEX_ID-1)) + 1

    if(pokedexNumber !==  notThisOne) return pokedexNumber

    return getRandomPokemom(notThisOne)
}

export const getOptionsForVote = () => {
    const firstId = getRandomPokemom();
    const secondId = getRandomPokemom(firstId);

    return [firstId, secondId]
}