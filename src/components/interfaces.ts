export interface ChangeButtons{
    currentPokemon: number
    nextPokemon(): void
    prevPokemon(): void
}

export interface PokemonCard{
    Sprite: string,
    Pokemon:{
        id: string;
        height: number;
        weight: number;
        species: {
            name: string;
        };
        sprites: {
            front_default: string;
            front_shiny: string;
        };
        types: {
            type: {
                name: string;
            };
        }[];
        abilities: {
            ability: {
                name: string;
                url: string;
            };
        }[];
        moves: never[];
        stats: never[];
    },
    changeSprite():void
}

export interface Abilities{
    abilities:
        {
            ability:{
                name:string,
                url: string
            }
        }[]
}

export interface Stats{
    stats:{
        stat:{
            name: string
        }
        base_stat: string
    }[]
}

export interface Moves{
    moves:{
        move: {
            name: string
        }
    }[]
}

export interface Table{
    tableHead: string[],
    tableBody: string[]
}