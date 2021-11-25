import React, {useState} from "react"
import {Modal} from '../../components'
import './listItem.scss'

export default function ListItem({idx, image, title, id, type}) {    

    const [modalOpen, setModalOpen] = useState(false)

    const modalClose = () => {
        setModalOpen(!modalOpen)
        if(modalOpen){
            document.getElementById("root").style.overflow = "unset";
        }else{
            document.getElementById("root").style.overflow = "hidden";
        }
    }

    return (
        <>
            <div className="listItem" onClick={modalClose}>
                <span className="ranking">{idx+1}</span>
                <img src={image} alt={title} />
            </div>       
            <>{modalOpen && <Modal id={id} modalClose={modalClose} type={type}></Modal>}</>
        </>
    )
}