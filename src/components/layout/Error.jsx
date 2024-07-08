import style from '../styles/Error.module.css'
import NavBar from '../project/components/NavBar'
import Footer from './Footer'
import LinkButton from './LinkButton'

export default function Error(){

    return(
        <>
            <NavBar />
            <div className={style.error}>
                <h1>Error 403</h1>
                <LinkButton to='/srmackfly' text='Retornar a página principal'/>
            </div>
            
            <Footer />
        </>
    )
}