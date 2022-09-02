import SectionHead from "./SectionHead"
import {FaRegHandshake} from 'react-icons/fa'
import AS from '../images/logo_as.png'
import AA from '../images/logo_aa.png'
import BC from '../images/logo_bc.png'

const Partners = () => {
  return (
    <section className="partners">
        <div className="container partners__container">
          <SectionHead icon={<FaRegHandshake/>} title="Our Partners"/>
          <div className="partner__wrapper">
            <div className="row">
              <ul className="column">
                <li><img src={AS} alt="Autism Speaks"/></li>
                <li><img src={AA} alt="The Art of Autism"/></li>
                <li><img src={BC} alt="Binance Charity"/></li>
              </ul>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Partners