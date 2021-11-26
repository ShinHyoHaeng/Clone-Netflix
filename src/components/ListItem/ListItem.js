import React, {useState} from "react"
import {Modal} from '../../components'
import './listItem.scss'

export default function ListItem({image, title, id, type}) {    

    const [modalOpen, setModalOpen] = useState(false)

    const modalClose = () => {
        setModalOpen(!modalOpen)
        if(modalOpen){
            document.getElementById("root").style.overflow = "unset";
            document.body.style.overflow = "unset";
        }else{
            document.getElementById("root").style.overflow = "hidden";
            document.body.style.overflow = "hidden";
        }
    }

    return (
        <>
            <div className="listItem" onClick={modalClose}>
                <img src={image} alt={title} />
            </div>       
            {modalOpen && <Modal id={id} modalClose={modalClose} type={type}></Modal>}
        </>
    )
}