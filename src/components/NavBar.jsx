import style from './styles/NavBar.module.css'
import icon from './img/icons/icon-1.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function NavBar(){

    const [isNavVisible, setIsNavVisible] = useState(false);

    const mostrarNavBar = () => {
        setIsNavVisible(prevState => !prevState);
    };


    return(

        <header>
            <div className={style.header}>
                <div className={style.logo}>
                 <Link to='/'>
                     <img src={icon} alt={icon} />
                     <p>Bolos de Casamento Por Sr-MackFly</p>
                 </Link>
             </div>
                <nav className={isNavVisible ? style.responsive_nav : ''}>
                    <Link to='/'>Página Inicial</Link>
                    <Link to='/pecaOnline'>Peça Online</Link>
                    <Link to='/contato'>Contato</Link>
                    <Link to='/sobre'>Sobre</Link>
                    <button className={`${style.nav_btn} ${style.nav_close_btn}`} onClick={mostrarNavBar}>
                        <FaTimes />
                    </button>
                </nav>
                <button className={`${style.nav_btn}`} onClick={mostrarNavBar}>
                    <FaBars />
                </button>
            </div>
            
        </header>
    )
}