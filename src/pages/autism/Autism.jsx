import './autism.css'
import Image from '../../images/header__image.jpg'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SectionHead from '../../components/SectionHead'
import {BsPuzzle} from 'react-icons/bs'
import ASDImage from '../../images/asd_image.png'

const Autism = () => {
  return (
    <>
    <Header title="What is Autism" image={Image}>
      Minim minim reprehenderit in sint laboris occaecat quis fugiat ipsum duis eu.
    </Header>
    <div className='container autism__container'>
      <SectionHead icon={<BsPuzzle/>} title="What is Autism?"/>
      <div className='autism__wrapper'>
        <div className='autism_left'>
          <p>
          Autism, or autism spectrum disorder, refers to a range of neurodevelopmental conditions that influences how an individual sees and collaborates with others, causing social and communication challenges. The term “spectrum” refers to the vast variety of symptoms and intensity experienced by people with autism. Autism manifests itself in early childhood and leads to social, educational, and occupational difficulties. Autism symptoms develop in children as early as their first year of life.          </p>
        </div>
        <div className='autism_right'>
          <img src={ASDImage} alt="Autism Spectrum Disorder"/>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Autism