import { Component } from 'react'
import {
    AiOutlineUser as UserIcon,
    AiOutlineMail as MailIcon,
    AiOutlineArrowRight as ArrowRight
} from 'react-icons/ai';

import "./ContactForm.scss"

export default class ContactForm extends Component {
    constructor(props) {

        super(props)
        this.state = {
            fields: { 
                name: "",
                email: "",
                message: ""
            },
            error: false
        }
    }

    async postMessage(data = {}) {
        try { 
            const response = await fetch(`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
            },
            body: JSON.stringify(data)
            });

            return response.json();
        }
        catch {
            //
        }
      }

    handleChange(e) {
        this.setState( () => { return { fields: { ...this.state.fields, [e.target.name]: e.target.value }, error: false}})
    }

    async handleSubmit(e) {        

        // *** Data validation
        for ( const [name, value] of Object.entries(this.state.fields) ) 
        {   
            if (value == "" || value == " ") {
                this.setState( () => {
                    return {
                        ...this.state.fields,
                        error: true
                    }
                } )

                return;
            }
        }

        // *** Scroll to the top to prevent buggy spalshscren displacement
        window.scrollTo(0,0);

        // *** Display success modal
        this.props.modalAction()

        const response = await this.postMessage({
            name: this.state.fields.name,
            email: this.state.fields.email,
            message: this.state.fields.message
        })

        // *** Empty all the fields
        this.setState({ fields: {
            name: "",
            email: "",
            message: ""
        }})
    }


    render() {
        return (
        <div className="contact-form-wrapper">
            <div className="form-body">
                <div className="form-group">
                    <label htmlFor="name">
                        <UserIcon/>
                    </label>
                    <input type="text" id="name" name="name" placeholder="Name" value={this.state.fields.name} onChange={ e => this.handleChange(e) }/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">
                        <MailIcon />
                    </label>
                    <input type="text" id="email" name="email" placeholder="Email" value={this.state.fields.email} onChange={ e => this.handleChange(e) }/>
                </div>
                <div className="form-group">
                    <textarea placeholder="Message..." name="message" id="message" cols="30" rows="10" value={this.state.fields.message} onChange={ e => this.handleChange(e) }></textarea>
                </div>
                <button className="form-button" type="button" onClick={ e => this.handleSubmit(e) }>
                    Submit <ArrowRight/>
                </button>
            </div>
            <div className="form-errors">
            { this.state.error ? "Data is invalid" : "" }
            </div>
        </div>
        )
    }
}
