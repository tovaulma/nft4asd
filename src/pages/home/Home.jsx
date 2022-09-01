import './home.css'
import MainHeader from '../../components/MainHeader'
import Partners from '../../components/Partners'
import OurMission from '../../components/OurMission'
import FAQs from '../../components/FAQs'
import Footer from '../../components/Footer'
import ImageSlider from '../../components/ImageSlider'
import { SliderData } from '../../components/SliderData'


const Home = () => {
  return (
    <>
    <MainHeader/>
    <OurMission/>
    <ImageSlider slides={SliderData} />
    <FAQs/>
    <Partners/>
    <Footer/>
    </>
  )
}

export default Home