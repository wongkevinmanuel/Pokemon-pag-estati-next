import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import { darkTheme } from '../themes'

function App({ Component, pageProps }: AppProps) {
  return( 
    //Provider = Proveedor de informacion, colocar elementos, objetos
    //<Component --- disponibles en todos los hijos
    //<NextUIProvider theme={ darkTheme}>
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default App