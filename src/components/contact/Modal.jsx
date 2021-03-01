import React from 'react'

import './Modal.scss'

export default function Modal({forwardRef}) {
    return (
        <div className="modal" ref={forwardRef}>
            <div className="modal-body">
                <div className="modal-success">Message has been sent!</div>
            </div>
        </div>
    )
}
