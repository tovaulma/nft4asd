import {Link} from 'react-router-dom'
import Image from '../images/main__header.jpg'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#1000NFT4ASD</h4>
          <h1>Join Us</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum suscipit mauris, id finibus libero iaculis a. Morbi condimentum iaculis tellus sit amet dictum. Aliquam pretium viverra erat in malesuada. Phasellus tincidunt, odio sed consectetur tincidunt, dolor eros porttitor nulla, quis sagittis odio urna nec purus. Nam eu ex eget mauris maximus aliquet ac eget lacus.
          </p>
          <Link to="/Contact" className='btn lg'>Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className='main__header-circle'></div>
          <div className='main__header-image'>
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader