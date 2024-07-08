import style from '../styles/Home.module.css'
import { Link } from 'react-router-dom'

export default function Home(){

    return(
        <div className={style}>
            <h2>Seção Home</h2>
            <Link to='/projeto'>Projeto</Link>
        </div>
    )
}