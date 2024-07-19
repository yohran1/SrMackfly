import style from '../styles/PecaOnline.module.css'
import Footer from '../layout/Footer'
import FormEmail from '../form/FormEmail'

export default function Sobre(){


    return(
        <>
            <section className={style.section}>
                <div className={style.container}>
                    <div className={style.box_contato}>
                        <h1>CONTATE-ME</h1>
                        <p>Sou um parágrafo. Clique aqui para adicionar o seu próprio texto e editar. Sou um ótimo espaço para você contar sua história para que seus usuários saibam um pouco mais sobre você.</p>
                        <p>(048) 98856-4857 | yohranv@gmail.com | PEDIDOS SR-MACKFLY ONLINE</p>
                        <p>Coletas são possíveis na Av. lorem ipsum de Campos, 000 Santa Catarina - SC 12345-678, BRASIL</p>
                    </div>
                    <FormEmail />
                    

                </div>

            </section>
            <Footer />
        </>
    )
}