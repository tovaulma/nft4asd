import {WiSunset} from 'react-icons/wi'
import SectionHead from './SectionHead'
import {missions} from '../data'
import Card from '../UI/Card'

const OurMission = () => {
  return (
    <section className="mission">
        <div className="container mission__container">
          <SectionHead icon={<WiSunset/>} title="Our Mission"/>
          <div className='mission__wrapper'>
              {
                missions.map(({id, title, info}) => {
                  return (
                    <Card className="missions__mission" key={id}>
                      <h4>{title}</h4>
                      <small>{info}</small>
                    </Card>
                  )
                })
              }
          </div>
        </div>
    </section>
  )
}

export default OurMission