export interface NameUrlProps {
    name: string,
    url: string
}

export interface AbilitiesProps {
    ability: NameUrlProps
}

export interface MovesProps {
    move: NameUrlProps
}

export interface TypesProps {
    name: string,
    color: string
}

export interface TypesPrimaryProps{
    type: TypesProps
}

export interface PokeDetailsProps {
    img: string,
    name: string,
    moves: MovesProps[],
    abilities: AbilitiesProps[],
    types: TypesProps[]
}

export interface PokeDataDetailsProps {
    data: PokeDetailsProps
}

export interface ColoursObjectType {
    normal: string,
	fire: string,
	water: string,
	electric: string,
	grass: string,
	ice: string,
	fighting: string,
	poison: string,
	ground: string,
	flying: string,
	psychic: string,
	bug: string,
	rock: string,
	ghost: string,
	dragon: string,
	dark: string,
	steel: string,
	fairy: string,
}