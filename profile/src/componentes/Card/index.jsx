import styles from "./app.module.css"

export default function App(props){
    return(
        <>
        <div className={styles.principal}>
            <img src={props.public}/>
            <h2>{props.nome}</h2>
            <hr/>
            <p>{props.profissao}</p>
            <hr />
            <p>{props.telefone}</p>
            <hr />
            <p>{props.email}</p>
            <hr />
            <button>{props.github}</button>
            <br />
            <button>{props.linkedin}</button>
            <br />
            <button>{props.twiter}</button>
        </div>
        </>
    )
}