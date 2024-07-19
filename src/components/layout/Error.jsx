import style from '../styles/Error.module.css'

export default function Error(){

    return(
        <>
            <div className={style.error}>
                <h1>Error 403</h1>
                <a href='/'>Retornar a página principal</a>
            </div>
            
        </>
    )
}