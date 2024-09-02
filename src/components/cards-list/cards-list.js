import './cards-list.css'
import Card from '../card/card';

const CardsList = ({cardData}) => {
  const elements = cardData.map(item => {
    const {id, ...itemProps} = item;
    return (
      <Card 
        key={id}
        {...itemProps}/>
    )
  })

  return (
    <ul className="cards">
      {elements}
    </ul>
  )
}

export default CardsList;