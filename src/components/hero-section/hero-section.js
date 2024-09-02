import './hero-section.css';
import Header from '../header/header';
import Divider from '../divider/divider';
import whiteIcon from '../../assets/coffee-beans-white.svg'

const HeroSection = () => {

  return (
    <div className="hero"> 
      {<Header/>}
      <div className="container">
        <h1 className="hero-title">Everything You Love About Coffee</h1>
        {<Divider lineClass='white' iconSrc={whiteIcon}/>}
        <div className="hero-text">
          We makes every day full of energy and taste
          <br />
          Want to try our beans?
        </div>
        <button className="btn-outline">More</button>
      </div>
    </div>
  )
}

export default HeroSection;

