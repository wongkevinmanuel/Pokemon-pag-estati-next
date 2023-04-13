import { poke } from '@/interfaces'
import React from 'react'
import {FC } from 'react';

import {Grid, Card, Row, Text} from '@nextui-org/react'
import { useRouter } from 'next/router';

interface Props{
    pokemon: poke;
}

//Funcional component
//props personalizadas
export const PokemonCard:FC <Props> = ({pokemon}) => {
  const router = useRouter();
  const onClickPokemon = () => {
    router.push(`/name/${ pokemon.name }`);
  }

  return (
            <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
                  <Card 
                  isPressable
                  onClick={onClickPokemon}>
                    <Card.Body css={{p:1}}>
                      <Card.Image 
                        src={pokemon.img}
                        width="100%"
                        height={140}
                        alt={pokemon.name}
                      />
                    </Card.Body>
                    <Card.Footer>
                      <Row justify='space-between'>
                        <Text transform='capitalize'>{pokemon.name}</Text>
                        <Text>{pokemon.id}</Text>
                      </Row>
                    </Card.Footer>
                  </Card>
            </Grid>
        )
}
