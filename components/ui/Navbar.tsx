import { Image, Spacer, Text, useTheme, Link } from '@nextui-org/react';
import React from 'react'

export const Navbar = () => {
  const { theme} = useTheme();
  //Todo los valores los extrae del tema
  console.log(theme);

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0x 20px',
        backgroundColor:theme?.colors.gray900.value
    }}>
        <Image
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'
          alt='icono app'
          width={70}
          height={70}
          />
          <Link href='/'>
                <Text color='white' h2>P</Text>
                <Text color='white' h3>okemon</Text>
          </Link>  
         <Spacer css={{ flex:1 }}></Spacer>
          <Link css={{marginRight:'10px'}} href="/favorites">
            <Text color='white'>Favoritos</Text>
          </Link>       
    </div>
  )
};