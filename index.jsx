import Navegador from '../components/Navegador'
import styles from '../styles/Estiloso.module.css'
import Head from 'next/head'

export default function Inicio(){
     return(
        <div className={`
                 bg-gradient-to-r from-purple-800 to-blue-600
                 text-white p-3
            `}>   
         <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main className={styles.main}>
         <h1 className={styles.title}>
            Bem vindo ao site <a href="http://localhost:3000/app">Jra Software !</a>
         </h1>

                    <div className={styles.grid}>
                        <div className={styles.card} >
                            <Navegador texto="Inovar" destino="/inovar"cor='darkmagenta' />
                            <Navegador  texto="Jra Software"   destino="/app"/>
                            <Navegador  texto="Fale Conosco"  destino="/faleconosco" cor='crimson' />
                            <Navegador  texto="Privacy" destino="/privacy" cor='chocolate' />
                            <Navegador  texto="Projetos" destino="/projetos/123" cor='green' />
                            <Navegador  texto="Integracao" destino="/integracao" cor='#f39e00' />
                        </div>
                    </div>
           </main>         
        </div>
    ) 
}