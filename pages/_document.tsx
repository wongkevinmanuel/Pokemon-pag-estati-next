//No es propio de next-ui es de next
//Nos permite tener un control absoluto
//de todo el documento
// Este archivo solo se procesa en el servidor, 
//por lo que los controladores de eventos 
//como onClick no se pueden usar en _document.
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import { CssBaseline } from '@nextui-org/react'

// Siguiente codigo necesario para bibliotecas
// CSS-in-JS para admitir la representación del 
//lado del servidor.
//Context es para poder utilizar la informacion del
//request or response entre otros
class MiDocumento extends Document{
  static async getInitialProps( ctx: DocumentContext ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    //express del initialProps
    return {
      ...initialProps
      ,styles: <>{initialProps.styles}</>
    };
  }
  render() {
    return (
      <Html lang="es">
        {/* etiquetas de next */}
        <Head> 
          {CssBaseline.flush()}
          <title>inicio</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MiDocumento;
