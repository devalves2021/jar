import Layout from "../components/Layout"
import styles from "../styles/Estiloso.module.css";
import { useState } from "react";
export default function Integracao(){

    const [codigo, setCodigo] = useState(1)
    const [cliente, setCliente] = useState({})

    async function ObterCliente(){
        
        const resp =  await fetch(`http://localhost:3000/api/clientes/${codigo}`)   
            const dados = await resp.json()
            setCliente(dados) 
       
        //  fetch(`http://localhost:3000/api/clientes/${codigo}`)   
           //  .then(resp =>resp.json())
           // .then(dados => setCliente(dados))
     }
    return(
       <div className={`
       bg-gradient-to-r from-purple-800 to-blue-600
       text-white p-3
         `}>
        <Layout titulo="Integração Api FontEnd & Backend">
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