import Layout from "../components/Layout"
import {  useState } from "react"
import styles from '../styles/Estiloso.module.css'

export default function Teste(){
   
    return (
        <div className={`
            bg-gradient-to-r from-purple-800 to-blue-600
            text-white p-3
       `}>
            <Layout titulo="Projetos em Produção">            
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