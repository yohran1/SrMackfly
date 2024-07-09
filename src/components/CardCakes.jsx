import style from './styles/CardCakes.module.css'
import PropType from 'prop-types'

export default function CardCakes({title, information, price, img}){

    return(
        <div className={style.card}>
            <div className={style.text}>
                <h4>{title}</h4>
                <p>{information}</p>
                <span>R${price}</span>
            </div>
            <div className={style.img}>
                <img src={img} alt={img}/>
            </div>
        </div>
    )
}
// const imagem = CardCakes.propType.img = 'https://via.placeholder.com/150'
CardCakes.propTypes = {
    title: PropType.string.isRequired,
    information: PropType.string.isRequired,
    price: PropType.string,
    img: PropType.string
}