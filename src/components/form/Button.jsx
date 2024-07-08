import PropsTypes from 'prop-types'
import style from '../styles/Button.module.css'

export default function Button({
    text = 'Insira o nome do Button',
    onClick
})
{
    return(
        <button className={style.btn} onClick={onClick}>{text}</button>
    )
}
Button.propTypes = {
    text: PropsTypes.string,
    onClick: PropsTypes.func
}