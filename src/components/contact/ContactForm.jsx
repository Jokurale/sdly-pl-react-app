import SubmitButton from './SubmitButton'

export default function ContactForm() {
    return ( <div className="form-wrapper d-flex justify-content-center flex-column">
        <div className="form-header">
            <span>To: Michał Podsiadły &#60;contact@sdly.pl&#62;</span>
              <span>From: Curious Visitor</span>
        </div>
            <form className="contact-form flex-column d-flex justify-content-center align-items-center">
                <label htmlFor="name">
                    Name
                    <input type="text" name="name" id="name"/>
                </label>
                <label htmlFor="email">
                    E-Mail
                    <input type="text" name="email" id="email"/>
                </label>
                <label htmlFor="message">
                    Message
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </label>
                <SubmitButton />
            </form>
        </div>
        )
}