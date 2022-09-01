import SectionHead from "./SectionHead"
import {FaRegHandshake} from 'react-icons/fa'

const Partners = () => {
  return (
    <section className="partners">
        <div className="container partners__container">
            <SectionHead icon={<FaRegHandshake/>} title="Our Partners"/>
        </div>
    </section>
  )
}

export default Partners