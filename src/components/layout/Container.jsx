import style from '../styles/Container.module.css'
import PropsTypes from 'prop-types'

export default function Container(props){

    return(
        <div className={`${style.container} ${style[props.customClass]}`}>
            {props.children}
        </div>
    )
}

Container.propTypes = {
    children: PropsTypes.node,
    customClass: PropsTypes.string
}
