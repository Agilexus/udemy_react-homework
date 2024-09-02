import './our-best-section.css'
import CardsList from '../cards-list/cards-list';

const OurBestSection = ({cardData}) => {
  return (
    <div className="our-best pt80 pb110">
      <div className="container">
        <div className="our-best-title">Our best</div>
        <CardsList cardData={cardData}/>
      </div>
    </div>
  )
}

export default OurBestSection;