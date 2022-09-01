import SectionHead from "./SectionHead"
import {FaRegHandshake} from 'react-icons/fa'
import AS from '../images/logo_as.png'
import ACT from '../images/logo_act.png'
import BC from '../images/charity-logo.svg'

const Partners = () => {
  return (
    <section className="partners">
        <div className="container partners__container">
          <SectionHead icon={<FaRegHandshake/>} title="Our Partners"/>
          <div className="partner__wrapper">
            <div className="row">
              <div className="column">
                <img src={AS} alt="Autism Speaks"/>
              </div>
              <div className="column">
                <img src={ACT} alt="ACT Games"/>
              </div>
              <div className="column">
                <img src={BC} alt="ACT Games"/>
              </div>
            </div>
            
          </div>
        </div>
    </section>
  )
}

export default Partners