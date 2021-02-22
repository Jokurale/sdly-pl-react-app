//import ContactPageSocials from './socials/ContactPageSocials'

import config from '../Config'

import contactSvg from '../svgs/contact.svg'

export default function ContactPage(props) {
    return (
        <div className="page-contact">
            <div className="contact-wrapper container">
                <div className="row">
                    <div className="col-12 d-flex align-items-end justify-content-end">
                        <button>Close</button>
                    </div>
                </div>
                <div className="row h-100">
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <img src={contactSvg} alt="Contact image" className="contact-image"/>
                    </div>
                    <div className="col-6">
                        {/* <ContactForm /> */}
                    </div>
                </div>
            </div>    
        </div>
    )
}

