import style from './styles/HeaderLocation.module.css'
import { Link } from 'react-router-dom'

export default function HeaderLocation(){


    return(
        <>
        <header className={style.header}>
            <p>Retirada, o mais rápido possível (em 15 minutos)</p>
            <a href="/SrMackfly/pecaOnline">Alterar</a>
        </header>
        <div className={style.menu}>
            <h3>MENU DE BOLOS</h3>
            <ul>
                <Link to='/SrMackfly/pecaOnline'>
                    <li>Bolos de Casamento</li>
                </Link>
                <Link to='/SrMackfly/pecaOnline'>
                    <li>Personalize Seu Bolo</li>
                </Link>
                
            </ul>
        </div>
        </>
        
        
    )
}