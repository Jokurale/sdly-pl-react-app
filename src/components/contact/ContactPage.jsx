import config from '../../Config'
import ContactForm from './ContactForm'
import contactSvg from '../../svgs/contact.svg'
import xClose from '../../svgs/x-close.svg'

import "./ContactPage.scss"

export default function ContactPage(props) {
    return (
        <div className="page-contact">
            <div className="mock-background d-block d-md-none"></div>
            <div className="contact-wrapper container">
                <div className="row">
                    <div className="col-12 d-none d-md-flex align-items-end justify-content-end">
                        <button className="contact-close-btn">
                            <img src={xClose} alt="Close contact page"/>
                        </button>
                    </div>
                </div>
                <div className="row h-100">
                    <div className="col-6 d-none d-md-flex justify-content-center align-items-center">
                        <img src={contactSvg} alt="Contact image" className="contact-image"/>
                    </div>
                    <div className="col-12 col-md-6 d-md-flex justify-content-center align-items-center">
                        <ContactForm />
                    </div>
                </div>
            </div>
 
        </div>
    )
}

