import style from '../styles/SrMackfly.module.css'
import Footer from '../layout/Footer'
import cakes_1 from '../img/cakes/bolo-layout-4.jpg'
import CakesSection from '../CakesSection'
import Carrossel from '../Carrossel'
import FooterInformations from '../layout/FooterInformations'

export default function SrMackfly(){

    return (
        <>
            <div className={style.container}>
                <div className={style.cakes_1}>
                <img src={cakes_1} alt={cakes_1} />
            </div>
                <CakesSection />
                <Carrossel />

            </div>
            <FooterInformations />
            <Footer />
        </>
    )
}