import "./Form.scss";

import {
  AiOutlineArrowRight as ArrowRight,
  AiOutlineMail as MailIcon,
  AiOutlineUser as UserIcon,
} from "react-icons/ai";
import React, { Component } from "react";

import PropTypes from "prop-types";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: "",
        email: "",
        message: "",
      },
      error: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async postMessage(data = {}) {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
        body: JSON.stringify(data),
      });

      return response.json();
    } catch {
      //
    }
  }

  handleChange(e) {
    this.setState(() => {
      return {
        fields: { ...this.state.fields, [e.target.name]: e.target.value },
        error: false,
      };
    });
  }

  async handleSubmit() {
    // *** Data validation

    const values = Object.values(this.state.fields);

    for (const value of values) {
      if (
        value === "" ||
        value === " " ||
        value.length >= 480 ||
        value.length < 0
      ) {
        this.setState(() => {
          return {
            ...this.state.fields,
            error: true,
          };
        });

        return;
      }
    }

    // *** Scroll to the top to prevent buggy spalshscreen displacement
    window.scrollTo(0, 0);

    // *** Display success modal
    this.props.modalAction();

    await this.postMessage({
      name: this.state.fields.name,
      email: this.state.fields.email,
      message: this.state.fields.message,
    });

    // *** Empty all the fields
    this.setState({
      fields: {
        name: "",
        email: "",
        message: "",
      },
    });
  }

  render() {
    return (
      <div className="Contact__FormWrapper">
        <div className="Contact__FormBody">
          <div className="Form__Group">
            <label htmlFor="name">
              <UserIcon />
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={this.state.fields.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="Form__Group">
            <label htmlFor="email">
              <MailIcon />
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              value={this.state.fields.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="Form__Group">
            <textarea
              placeholder="Message..."
              name="message"
              id="message"
              cols="30"
              rows="10"
              value={this.state.fields.message}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button
            className="Form__Button"
            type="button"
            onClick={this.handleSubmit}
          >
            Submit <ArrowRight />
          </button>
        </div>
        <div className="Form__Errors">
          {this.state.error ? "Data is invalid" : ""}
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  modalAction: PropTypes.func,
};

export default Form;
