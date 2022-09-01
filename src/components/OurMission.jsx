import {WiSunset} from 'react-icons/wi'
import SectionHead from './SectionHead'
import {missions} from '../data'

const OurMission = () => {
  return (
    <section className="mission">
        <div className="container mission__container">
            <SectionHead icon={<WiSunset/>} title="Our Mission"/>
        </div>
        <div className='programs__wrapper'>
            {
                missions.map(({id, title, info}))
            }
        </div>
    </section>
  )
}

export default OurMission