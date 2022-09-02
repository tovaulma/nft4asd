import './about.css'
import Header from '../../components/Header'
import Image from '../../images/header__image.jpg'
import Footer from '../../components/Footer'
import WhoWeAre from '../../components/WhoWeAre'

const About = () => {
  return (
    <>
    <Header title="About Us" image={Image}>
      Culpa Lorem incididunt consequat eiusmod aute.
    </Header>
    <WhoWeAre/>
    <Footer/>
    </>
  )
}

export default About