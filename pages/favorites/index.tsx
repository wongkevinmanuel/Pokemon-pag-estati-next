import {useEffect, useState } from 'react'

import { MainLayout } from '@/components/layouts'
import { NoFavorites } from '@/components/ui';
import { localFavorites } from '@/utils';
import { Card, Grid } from '@nextui-org/react';
import FavoritePokemon from '@/components/pokemonfavorite/FavoritePokemon';

const FavoritesPage = () => {
  //Crear estado en este componente
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);
  //useEffect se crea del lado del cliente
  //Solo se ejecuta la primera vez que la pagina se crea
  useEffect(() => {
    //Leer los pokemons y establecer el estado del componente
    setFavoritePokemons(localFavorites.pokemonsEnLocalStorage());
  }, []);
  
  return (
    <MainLayout titulo='Pokemons - Favoritos'>
      {
        favoritePokemons.length === 0 ?
        (
          <NoFavorites></NoFavorites>
        )
        :
        (
          <FavoritePokemon favoritePokemons={favoritePokemons} ></FavoritePokemon>
        )
      }
    </MainLayout>
  )
}

export default FavoritesPage;