import {
    AiOutlineUser as UserIcon,
    AiOutlineMail as MailIcon,
    AiOutlineArrowRight as ArrowRight
} from 'react-icons/ai';

import "./ContactForm.scss"

export default function ContactForm() {
    return (
        <div className="contact-form-wrapper">
            <div className="form-body">
                <div className="form-group">
                    <label htmlFor="name">
                        <UserIcon/>
                    </label>
                    <input type="text" id="name" name="name" placeholder="Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">
                        <MailIcon />
                    </label>
                    <input type="text" id="email" name="email" placeholder="Email"/>
                </div>
                <div className="form-group">
                    <textarea name="message" id="message" cols="30" rows="10" defaultValue="Message..."></textarea>
                </div>
                <button className="form-button">
                    Submit <ArrowRight/>
                </button>
            </div>
        </div>
    )
}