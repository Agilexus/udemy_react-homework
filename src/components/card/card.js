import './card.css'

const Card = ({imgSrc, label, country, price}) => {

  return (
    <div className="card">
      <div className="card-img">
        <img src={imgSrc} alt="coffee img" />
      </div>
      <div className="card-label">{label}</div>
      <div className="card-country">{country}</div>
      <div className="card-price">{price}</div>
    </div>
  )

}

export default Card;