import {FC, useState} from 'react'
import { GetStaticProps, GetStaticPaths } from 'next';

import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';

import { pokeApi } from '@/api';
import { Pokemon } from '@/interfaces';

import { MainLayout } from '@/components/layouts';
import { getPokemonInformation, localFavorites } from '@/utils';

interface Props{
    pokemon: Pokemon;
}

const PokemonByNamePage: FC<Props> = ({ pokemon }) => {
  //Para mantener un estado en react
  const[estaEnFavoritos, agregarEnFavoritos] = useState(localFavorites.existeEnFavoritos(pokemon.id));

  //Si esta encendido o apagado
  //como inteructor
  const onToggleFavorite = () =>{
    localFavorites.toggleFavorite(pokemon.id);
    agregarEnFavoritos(!estaEnFavoritos);
  }

    return (
        <MainLayout titulo={pokemon.name}>
          <Grid.Container css={{marginTop:'5px'}} gap={2}>
            <Grid xs={12} sm={4}>
              <Card isHoverable css={{padding:'30px'}}>
                <Card.Body>
                  <Card.Image
                        src={pokemon.sprites.other?.dream_world.front_default || 
                              '/no-image.png'}
                        alt={pokemon.name}
                        width="100%"
                        height={200}>
                  </Card.Image>
                </Card.Body>
              </Card>
            </Grid>
            <Grid xs={12} sm={8}>
              <Card>
                <Card.Header css={{display:'flex' , justifyContent:'space-between'}}>
                  <Text h1  transform='capitalize'>{pokemon.name}</Text>
                    <Button color='gradient' ghost={!estaEnFavoritos} onClick={onToggleFavorite}> 
                        {estaEnFavoritos ? 'Esta en favoritos' : 'Guardar en favoritos'}
                    </Button>
                </Card.Header>
                <Card.Body>
                  <Text size={30}>Sprites: </Text>
                  <Container direction='row' display='flex'>
                    <Image
                      src={pokemon.sprites.front_default}
                      alt={pokemon.name}
                      width={100}
                      height={100}
                      />
                      <Image
                      src={pokemon.sprites.back_default}
                      alt={pokemon.name}
                      width={100}
                      height={100}
                      />
                      <Image
                      src={pokemon.sprites.front_shiny}
                      alt={pokemon.name}
                      width={100}
                      height={100}
                      />
                      <Image
                      src={pokemon.sprites.back_shiny}
                      alt={pokemon.name}
                      width={100}
                      height={100}
                      />
                  </Container>
                </Card.Body>
              </Card>
            </Grid>
          </Grid.Container>
        </MainLayout>
      )
    }

//paginas dynamic routes ( [name].tsx )
export const getStaticPaths: GetStaticPaths  = async (ctx) => {
    //Profe metodo
    //const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
    //const pokemonNames: string [] = data.results.map (pokemon => pokemon.name); 

    //Nombres de los pokemon
    var pathsPokemonsNames = [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
    "caterpie",
    "metapod",
    "butterfree",
    "weedle",
    "kakuna",
    "beedrill",
    "pidgey",
    "pidgeotto",
    "pidgeot",
    "rattata",
    "raticate",
    "spearow",
    "fearow",
    "ekans",
    "arbok",
    "pikachu",
    "raichu",
    "sandshrew",
    "sandslash",
    "nidoran-f",
    "nidorina",
    "nidoqueen",
    "nidoran-m",
    "nidorino",
    "nidoking",
    "clefairy",
    "clefable",
    "vulpix",
    "ninetales",
    "jigglypuff",
    "wigglytuff",
    "zubat",
    "golbat",
    "oddish",
    "gloom",
    "vileplume",
    "paras",
    "parasect",
    "venonat",
    "venomoth",
    "diglett",
    "dugtrio",
    "meowth",
    "persian",
    "psyduck",
    "golduck",
    "mankey",
    "primeape",
    "growlithe",
    "arcanine",
    "poliwag",
    "poliwhirl",
    "poliwrath",
    "abra",
    "kadabra",
    "alakazam",
    "machop",
    "machoke",
    "machamp",
    "bellsprout",
    "weepinbell",
    "victreebel",
    "tentacool",
    "tentacruel",
    "geodude",
    "graveler",
    "golem",
    "ponyta",
    "rapidash",
    "slowpoke",
    "slowbro",
    "magnemite",
    "magneton",
    "farfetchd",
    "doduo",
    "dodrio",
    "seel",
    "dewgong",
    "grimer",
    "muk",
    "shellder",
    "cloyster",
    "gastly",
    "haunter",
    "gengar",
    "onix",
    "drowzee",
    "hypno",
    "krabby",
    "kingler",
    "voltorb",
    "electrode",
    "exeggcute",
    "exeggutor",
    "cubone",
    "marowak",
    "hitmonlee",
    "hitmonchan",
    "lickitung",
    "koffing",
    "weezing",
    "rhyhorn",
    "rhydon",
    "chansey",
    "tangela",
    "kangaskhan",
    "horsea",
    "seadra",
    "goldeen",
    "seaking",
    "staryu",
    "starmie",
    "mr-mime",
    "scyther",
    "jynx",
    "electabuzz",
    "magmar",
    "pinsir",
    "tauros",
    "magikarp",
    "gyarados",
    "lapras",
    "ditto",
    "eevee",
    "vaporeon",
    "jolteon",
    "flareon",
    "porygon",
    "omanyte",
    "omastar",
    "kabuto",
    "kabutops",
    "aerodactyl",
    "snorlax",
    "articuno",
    "zapdos",
    "moltres",
    "dratini",
    "dragonair",
    "dragonite",
    "mewtwo",
    "mew"];

    return {
        paths: pathsPokemonsNames.map(
            name => ({ params:{name}})
        ),
        fallback: 'blocking'
    }
}

//{}desestructurar de ctx los parametros
export const getStaticProps: GetStaticProps = async ({params}) => {
    //Se recibe la data de getStaticPaths
    //para leer argumentos del url, se lo obtiene
    //del contexto

    //name x q es el argumento q se recibe
    //pages/name/[name].tsx
    const {name} = params as {name: string};
    //const {data} = await pokeApi.get<Pokemon>(`/pokemon/${name}`);

    //Reducir los datos enviados en props
    //const pokemonDataOnlyRequired = {
    //  id: data.id,
    //  name: data.name,
    //  sprites: data.sprites
    //}
    const nameLowerCase: string = name.toLowerCase();
    console.log(nameLowerCase);
    const data = await getPokemonInformation(nameLowerCase);
    if (data == null){
      return {
        redirect:{
          destination:'/',
          permanent:false
        }
      }
    }

    return {
        props: {
            pokemon: data
        }
    };
}
export default PokemonByNamePage;