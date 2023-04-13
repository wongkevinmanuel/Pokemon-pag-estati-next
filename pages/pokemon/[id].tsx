import React, { FC, useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next';

import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';

import { pokeApi } from 'api';
import { Pokemon } from '@/interfaces';
import { MainLayout } from '@/components/layouts';
import { getPokemonInformation, localFavorites } from '@/utils';


interface Props{
  pokemon: Pokemon;
}

//{id, name}
//const PokemonPagina: FC<Props>=(props:Props) => {

const PokemonPagina: FC<Props>=({ pokemon }) => {
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

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
//Se puede usar getStaticPaths si estamos de manera estatica pre-rederizando 
//las paginas que usan dynamic routes ( [id].tsx )
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  //const { data } = await  // your fetch function here 
  var pathsPokemons:string[];
  pathsPokemons = [...Array(151)];

  //profe
  pathsPokemons = [...Array(151)].map((value, indice) => `${ indice +1}`);

  return {
    //Los paths son los que se permiten generar
    //en el buil time
    //La cantidad de paths = cantidad de paginas 
    //que se van a pre-generar (buil time)
    //fallback = si la persona envia url que no esta previamente
    //renderizado (No existe), mostrar error 404
  //  paths: [
  //    {
  //      params: { id:'1'}
  //    }
  //  ],
  //  fallback: false
  //}
    paths: pathsPokemons.map(
        id => ({ params:{ id } })
    ),
    fallback: false
  }
}

// { } desestrurar de ctx los parametros
export const getStaticProps: GetStaticProps = async ({ params }) => {
  //axios super cliente para traer 
  //los datos request get, post
  //Realizar la peticion al api
  //Se especifica el tipo 
  //se reciben la data de getStaticPaths
  //para leer los argumentos del url, se lo obtiene del
  //contexto

  //const {id} = params as { id:string};
  //const {data} = await pokeApi.get<Pokemon>(`/pokemon/${ id }`);
  
  const {id} = params as {id:string};
  const data = await getPokemonInformation(id);
  
  return {
    props: {
      pokemon: data
    }
  };

}

export default PokemonPagina;