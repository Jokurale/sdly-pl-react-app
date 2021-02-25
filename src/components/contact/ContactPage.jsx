import ContactImage from "./ContactImage"
import ContactForm from "./ContactForm"
import ContactHeader from "./ContactHeader"
import ContactFooter from "./ContactFooter"

import PageRefs from "../../js/PageRefs"

import "./ContactPage.scss"

export default function ContactPage() {
    return (
        <div className="page-contact" ref={PageRefs.getContactRef()}> 
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="contact-wrapper row">
                            <div className="col-12">
                                <ContactHeader/>
                            </div>
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                <ContactImage />
                            </div>
                            <div className="col-12 col-md-6">
                                <ContactForm />
                            </div>
                            <div className="col-12">
                                <ContactFooter />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

