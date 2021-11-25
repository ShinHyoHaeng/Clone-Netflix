import './modal.scss'
import React from 'react'
import {Close} from '@material-ui/icons'
import { createPortal } from "react-dom";
import {Detail} from '../../../components'


const Modal = ({modalClose, id, type}) => {

    // modal 외부 영역 클릭 시 modal 닫힘
    const onCloseModal = (e) => {
        if(e.target === e.currentTarget){
            modalClose()
        }
    };

    return createPortal(
        <div className="modal_container" onClick={onCloseModal}>
            <div className="itemModal">
                <div className="back">
                    <Close onClick={modalClose} className="modal_button" />
                </div>
                <Detail id={id} type={type}/>
            </div>
        </div>,
        document.getElementById("modal_root")
    )
    
}

export default Modal;