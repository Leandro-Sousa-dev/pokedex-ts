export const getImgUrl = (url: string) => {
    const id = url.slice(34, -1)
    const response = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return response
}