import Cabecalho from "../components/Cabecalho";
import styles from '../styles/Estiloso.module.css'
import Layout from "../components/Layout";

export default function App(){
    return(
        <div className={`
                 bg-gradient-to-r from-purple-800 to-blue-600
                 text-white p-3
            `}>   
              <Layout titulo='O que oferecemos' >
                  <div className={`
                     flex justify-center items-center
                     text-green-600 rounded-full p-2 m-1
                     hover:bg-purple-50  text-5xl
                  
                  `}>
                    <h1>Em desenvolvimento copyright 2022</h1>
                  </div>
              </Layout>
        </div>
    )
}