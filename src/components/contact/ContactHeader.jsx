import Xbtn from '../../svgs/x-close.svg'

import "./ContactHeader.scss"

export default function ContactHeader(props) { 
    return (
        <div className="contact-header">
            <img src={Xbtn} alt="" onClick={ () => { props.closeContactAction() } }className="close-btn"/>
            <h3>Leave me a message</h3>
            <hr/>
        </div>
    )
}