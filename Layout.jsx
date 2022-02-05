import Link from "next/link";
import styles from "../styles/Layout.module.css";

export default function Layout(props){
    console.log(props)
    return(
        <div className={styles.layout}>
           <div className={styles.cabecalho}>
               <h1>{props.titulo}</h1>
                <Link className={`
                    bg-gradient-to-r from-purple-800 to-blue-600
                    text-white p-3
                `}  href="/">Voltar</Link>
           </div>     
            <div className={styles.conteudo} >
                {props.children}
            </div>
        </div>
    )
}