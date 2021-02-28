import Xbtn from '../../svgs/x-close.svg'

import "./ContactHeader.scss"

import ActionManager from '../../js/ActionManager'

export default function ContactHeader() { 
    return (
        <div className="contact-header">
                <img src={Xbtn} alt="Close this page" onClick={ () => { ActionManager.hidePage('contact') } } className="close-btn"/>
                <h3>Leave a message</h3>
        </div>
    )
}