import './divider.css';

const Divider = ({lineClass = '', iconSrc}) => {

  return (
    <div className="divider">
      <div className={`line line-left ${lineClass}`}></div>
      <img src={iconSrc} alt="" className="coffee-icon" />
      <div className={`line line-right ${lineClass}`}></div>
    </div>
  )
}

export default Divider;
