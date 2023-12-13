import React from "react";
import  ReactDOM  from "react-dom";
import './Modal.css';

const ModalOverlay = props => {
    return (<div className="modal">
        <div className="content">{props.children}</div>
    </div>)
}

const portalElement = document.getElementById('overlay')
const Modal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </React.Fragment>
      
    );
}

export default Modal;