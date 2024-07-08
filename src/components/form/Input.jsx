import style from '../styles/Input.module.css'
import PropsTypes from 'prop-types'

export default function Input({
    type = 'text',
    name = 'insira o name',
    placeholder = 'Insira o placeholder',
    onChange,
    value
}){

    return(
        <div className={style.form_control}>
            <input 
                id={name}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                required
            />
        </div>
            
        
    )
}
Input.propTypes = {
    type: PropsTypes.string.isRequired,
    name: PropsTypes.string.isRequired,
    placeholder: PropsTypes.string.isRequired,
    onChange: PropsTypes.func,
    value: PropsTypes.string
}