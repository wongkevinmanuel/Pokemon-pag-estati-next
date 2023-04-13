import Head from 'next/head'
import React from 'react'
import {FC, ReactNode} from 'react';

import { Navbar } from '../ui';

interface Props {
    titulo?:string;
    children?:ReactNode;
}

//Optener el url host original 
const originUrlHost = (typeof window == 'undefined')? '':window.location.origin;

//Es un Functional Component 
//Los Props van de esta manera
export const MainLayout: FC <Props> = ({ children, titulo }) => {
  
  return (
    <>
        <Head>
            <title> {titulo ||  'PokemonApp'} </title>
            <meta name="author" content='Kevin Onofre' />
            <meta name="description" content={'Informacion sobre el pokemon ' + titulo} />
            <meta name='keywords' content={titulo + ' , pokemon, pokedex'} />

            <meta property='og:title' content={`Informacion de ${titulo}`}/>
            <meta property='og:description' content={`Pagina con informacion sobre ${titulo}`}/>
            <meta property='og:image' content={`${originUrlHost}/img/banner.png`}/>

        </Head>

        {/* Navbar */}
        <Navbar />
        
        <main style={
          {
            padding: '0px 20px'
          }
        }>
            {children}
        </main>
    </>
  )
}
