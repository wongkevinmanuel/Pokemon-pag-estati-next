import { Container,  Text, Image } from '@nextui-org/react';

export const NoFavorites = () => {
  return (
    <Container css={{
        display: 'flex',
        flexDirection:'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center'
      }}>
        <Text h1> No hay favoritos</Text>
        <Image
        src='https://www.pngkit.com/png/detail/139-1391697_png-freeuse-library-by-marikots-on-deviantart-chibi.png'
        width={250}
        height={250}
        css={{
          opacity:0.1
        }}
        >
        </Image>
      </Container>
  )
}
