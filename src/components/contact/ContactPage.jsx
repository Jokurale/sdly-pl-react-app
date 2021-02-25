import ContactImage from "./ContactImage"
import ContactForm from "./ContactForm"
import ContactHeader from "./ContactHeader"
import ContactFooter from "./ContactFooter"

import PageRefs from "../../js/PageRefs"

import Modal from './Modal'

import gsap from 'gsap'

import { createRef } from 'react'

import "./ContactPage.scss"


export default function ContactPage() {

    const modalRef = createRef()

    function displayModal() { 
        const tl = gsap.timeline({defaults: {ease: 'power2.easeInOut'}})

        const modal = modalRef.current

        tl.fromTo(modal, {autoAlpha: 0}, {autoAlpha: 1}).to(modal, {delay: 1, autoAlpha: 0})
    }

    return (
        <div className="page-contact" ref={PageRefs.getContactRef()}>
            <div className="container">
            <Modal forwardRef={modalRef}/>
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
                                <ContactForm modalAction={displayModal}/>
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

