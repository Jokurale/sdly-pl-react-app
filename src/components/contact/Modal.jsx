import react from 'react'

import './Modal.scss'

export default function Modal(props) {
    return (
        <div className="modal" ref={props.forwardRef}>
            <div className="modal-body">Message sent succesfully.</div>
        </div>
    )
}
