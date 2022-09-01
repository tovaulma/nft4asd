import SectionHead from "./SectionHead"
import {TbQuestionMark} from 'react-icons/tb'
import {faqs} from '../data'
import FAQ from './FAQ'

const FAQs = () => {
  return (
    <section className="faqs">
        <div className="container faqs__container">
            <SectionHead icon={<TbQuestionMark/>} title="FAQs" />
            <div className="faq__wrapper">
                {
                    faqs.map(({id, question, answer}) => {
                        return <FAQ key={id} question={question} answer={answer}/>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default FAQs