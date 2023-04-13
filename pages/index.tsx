import { Inter } from '@next/font/google'
import { MainLayout } from '@/components/layouts'
import React from 'react';
import { GetStaticProps } from 'next'
import { pokeApi } from '../api';
import { poke, PokemonsList } from '@/interfaces';
import { Grid, Card, Row, Text } from '@nextui-org/react';
import { PokemonCard } from '@/components/pokemon/PokemonCard';

const inter = Inter({ subsets: ['latin'] })

interface Props{
  pokemons: poke[];
}

function Home(props:Props) {

  //Cargar los pokemon
  //cuando el cliente correo la app
  //console.log(props);
  
  return (
    <MainLayout titulo='Listado-Pokemon'>
          {/* Estos tag se los envia al componente */}
          <Grid.Container gap={2} justify='flex-start'>
            {
              props.pokemons.map(
                element => (
                  <PokemonCard key={element.id} pokemon={element}></PokemonCard>
                )
              )
            }
          </Grid.Container>
    </MainLayout>
  )
}

//SSG: Static site generation: De ante mano sabemos que paginas se
//mostrar al usuario.
//Solo se ejecuta de lado del servidor
//Solo se ejecuta en el build time
//Funcion solo se ejecuta en las pages
//Usar cuando se sabe que estos son los 
//parametros que la pagina necesita

export const getStaticProps: GetStaticProps = async (ctx) => {
  //axios super cliente para traer 
  //los datos request get, post
  //Realizar la peticion al api
  //Se especifica el tipo 
  const {data} = await pokeApi.get<PokemonsList>('/pokemon?limit=151');
  //const pokemons: poke[] = data.results;
  //var i: number = 0;
  //while( i < 151){
  //  pokemons[i].id = (i + 1);
  //  pokemons[i].name = data.results[i].name;
  //  pokemons[i].img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'+ (i +1) +'.svg';
  //  i++;
  //}
  
  const pokemons: poke[] = data.results.map( 
    (poke, i ) => ({
      //
    ...poke,
    id: i +1,
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'+ (i + 1)+ '.svg'}));

  //Llega al cliente
  return {
    props: {
      pokemons
    }
  };

}

export default Home;

