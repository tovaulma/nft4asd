import './roadmap.css'
import Header from '../../components/Header'
import Timeline from '../../components/Timeline'
import Footer from '../../components/Footer'
import Image from '../../images/header__image.jpg'

const Roadmap = () => {
  return (
    <>
    <Header title="Roadmap" image={Image}>
      Culpa Lorem incididunt consequat eiusmod aute.
    </Header>
    <Timeline/>
    <Footer/>
    </>
  )
}

export default Roadmap