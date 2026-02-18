import { Poppins } from 'next/font/google';
import { Great_Vibes } from 'next/font/google';
import './globals.css';
import Head from  "next/head"

// 1. Configuramos a fonte fora do componente

const fonteLogo = Great_Vibes ({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vibes'
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
});

// 2. O ÚNICO RootLayout do projeto
export default function RootLayout({ children }) {
  return (
  
    <html lang="pt-br" className={poppins.variable}>
        <Head>
        <title>Componente</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

        <body>
               
      
        {children}     
        
        <h1 className={fonteLogo.className} style={{color: '#B2987D', fontSize: '50px'}}>S. Kelly</h1>
            
      </body>
    </html>
  );
}