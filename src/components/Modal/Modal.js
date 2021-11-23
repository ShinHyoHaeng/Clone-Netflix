import React from 'react'
import { createPortal } from 'react-dom';
import {Close} from '@material-ui/icons'
import './modal.scss'

const Modal = ({modalClose}) => {

    // modal 외부 영역 클릭 시 modal 닫힘
    const onCloseModal = (e) => {
        console.log('e.target: ', e.target)
        console.log('e.targetcurrentTarget: ', e.currentTarget)
        if(e.target === e.currentTarget){
            modalClose()
        }
    }

    return (
        <div className="modal_container" onClick={onCloseModal}>
            <div className="itemModal">
                <div className="back">
                    <Close onClick={modalClose} className="modal_button" />
                </div>
            </div>
        </div>
    )
    
}

export default Modal