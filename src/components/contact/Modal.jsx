
import React from 'react'

import SkewLoader from 'react-spinners/SkewLoader'

import './Modal.scss'

export default function Modal(props) {
    return (
        <div className="modal" ref={props.forwardRef}>
            <div className="modal-body">
                <div className="modal-success" ref={props.successRef}>Message has been sent!</div>
                <div className="modal-spinner" ref={props.spinnerRef}>
                    <SkewLoader loading/>
                </div>
                <div className="modal-error" ref={props.errorRef}>Something went wrong :(</div>
            </div>
        </div>
    )
}
