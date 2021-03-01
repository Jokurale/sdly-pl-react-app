import React from 'react'

import './Modal.scss'

export default function Modal({forwardRef}) {
    return (
        <div className="Modal" ref={forwardRef}>
            <div className="Modal__Body">
                <div className="Modal__Body--success">Message has been sent!</div>
            </div>
        </div>
    )
}
