import contactImage from '../../svgs/contact-sub.svg'

import "./Image.scss"

export default function Image() {
    return (
        <div className="Contact__Image d-none d-md-block">
            <img src={contactImage} alt="Contact image"/>
        </div>
    )
} 