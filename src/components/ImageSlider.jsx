import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import {useState} from 'react'
import SectionHead from "./SectionHead"
import {FiImage} from 'react-icons/fi'


const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);


    const slideStyle = {
        marginTop: '4rem',
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].image})`
    }

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer'
    }

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer'
    }

    const dotsContainerStyles = {
        display: 'flex',
        justifyContent: 'center'
    }

    const dotStyles = {
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '15px'
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    } 

  return (
    <section className='imageSlider'>
        <div className="container imageSlider__container">
            <SectionHead icon={<FiImage/>} title="Gallery" />
            <div className="imageSlider__wrapper">
                <div style={leftArrowStyles} onClick={goToPrevious}><FaArrowAltCircleLeft/></div>
                <div style={rightArrowStyles} onClick={goToNext}><FaArrowAltCircleRight/></div>
                <div style={slideStyle}></div>
                <div style={dotsContainerStyles}>
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)}>●</div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ImageSlider