import Input from '../form/Input'
import style from './styles/Login.module.css'
import SubmitButton from '../form/SubmitButton'
import Message from './Message'
import Footer from '../layout/Footer'
import { Link } from 'react-router-dom'

export default function ForgotPassword(){
    const message = 'Aguardando confirmação do usuário!'

    return(
        <>
            <form className={style.formLogin}>
                <div className={style.headerLogin}>
                    <h2>Digite nova senha!</h2>
                </div>
                <div className={style.inputsLogin}>
                    <Input 
                        type='password'
                        name='password'
                        placeholder='Digite nova senha!'
                    />
                    <Message  message={message}/>
                    
                    <div className={style.buttons}>
                        <SubmitButton text='Salvar'/>   
                        <Link to='/login'>
                            <SubmitButton text='Voltar'></SubmitButton> 
                        </Link>
                    </div>
                </div>
            </form>
            <Footer msg={'Entre no projeto aqui!'} />
        </>
    )
}