import contactImage from '../../svgs/contact-sub.svg'

import "./ContactImage.scss"

export default function ContactImage() {
    return (
        <div className="contact-image d-none d-md-block">
            <img src={contactImage} alt="Contact image"/>
        </div>
    )
} 