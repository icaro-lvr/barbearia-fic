'use client'
import Image from "next/image";
import style from "./page.module.css";
import { Great_Vibes } from 'next/font/google';
import { useState } from "react";


const fonteLogo = Great_Vibes ({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-vibes'
  })

export default function Home (){

  const [isLight, setIsLight] = useState(true);

  const alterarCor = () => {
    setIsLight(!isLight);
  };

  const sunIcon = "/sun.png";
  const moonIcon = "/moon.png";

  
  return(
    <>
    
    <main style={{
      backgroundColor: isLight ? '#ffffff' : '#000000',
      color: isLight ? '#000' : '#fff',
      height: '100dvh',
      width: '100dvw',
      transition: '0.3s'
    }}>
      <section className={style.bttn}>
        <Image 
          src='/logo.png'
          width={200}
          height={200}
          alt="Logo"
        />

        <Image
          // 2. Agora o JSX consegue acessar 'isLight' e 'alterarCor'
          src={isLight ? moonIcon : sunIcon}
          onClick={alterarCor} // Use a função que criamos acima
          width={100}
          height={100}
          style={{ cursor: 'pointer' }} // Dica: adicione cursor para o usuário saber que é clicável
          alt="tema"
        />
      </section>


<section className={style.secaoBanner}></section>
<div className={style.secaoText}>
    <h1> Bem-vindo a Barber Shop</h1> 
    <p>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p> 
    <p> Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p> 
    </div>
    <h1 className={fonteLogo.className} style={{color: '#B2987D', fontSize: '50px'}}>S. Kelly</h1>
       </main>
        </>
  )
}
