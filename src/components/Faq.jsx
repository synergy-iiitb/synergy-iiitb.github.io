import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import faqs from '../content/faq';
import "./Faq.scss";
import OneFaqQuestionHome from "./One_faq_question_home";
const Faq = () => {
    const faqitems = [];
    for(var i = 0; i < faqs.length; i++){
        faqitems.push(<OneFaqQuestionHome heading = {faqs[i].question} body = {faqs[i].answer}
        id = {i}
        />);
    }

    
    return (
        <div className="faq-wrapper homeac">
            <Container>
                {/* div centered inside container */}
                <div className="faq homeac">
                    <h1 className='faq-heading'>Faq<span className="dot_color">.</span></h1>
                    {/* center accordion div */}
                    <div class="accordion accordion-flush homeac" id="accordionExample">
                       {faqitems}
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Faq;