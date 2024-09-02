import Divider from '../divider/divider'
import blackIcon from '../../assets/coffee-beans-black.svg'

import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <img src="./img/logo-dark.svg" alt="logo" className="logo dark" />
      <ul className='page-list dark'>
        <li><a href="google.com" className="page-link dark">Coffee house</a></li>
        <li><a href="google.com" className="page-link dark">Our coffee</a></li>
        <li><a href="google.com" className="page-link dark">For your pleasure</a></li>
      </ul>
      <Divider iconSrc={blackIcon} />
    </div>
  )
}

export default Footer;