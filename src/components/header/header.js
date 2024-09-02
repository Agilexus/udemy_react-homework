import './header.css';

const Header = () => {
  return (
    <div className="header">
      <img src="./img/logo.svg" alt="logo" className="logo" />
      <ul className='page-list'>
        <li><a href="google.com" className="page-link">Coffee house</a></li>
        <li><a href="google.com" className="page-link">Our coffee</a></li>
        <li><a href="google.com" className="page-link">For your pleasure</a></li>
      </ul>
    </div>
  )
}

export default Header;