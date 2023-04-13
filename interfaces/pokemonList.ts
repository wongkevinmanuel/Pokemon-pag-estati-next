/*
Las interfaces solo sirven para ayudar a que los objetos
se vean de cierta manera, que tengan ciertas propiedades,
ciertos metodos.
Las interfaces no obliga a tener ciertos objetos.
*/

export interface PokemonsList {
    count:    number;
    //opcional
    next?:     string;
    previous?: string;
    results:  poke[];
}

export interface poke {
    id: number;
    name: string;
    url:  string;
    img: string;
}

