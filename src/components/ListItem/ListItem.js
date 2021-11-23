import React, {useState} from "react"
//import Modal from '../modal/Modal'
import './listItem.scss'

export default function ListItem({idx, image, title}) {    

    // const [modalOpen, setModalOpen] = useState(false)

    // const modalClose = () => {
    //     setModalOpen(!modalOpen)
    //     if(modalOpen){
    //         document.getElementById("root").style.overflow = "unset";
    //     }else{
    //         document.getElementById("root").style.overflow = "hidden";
    //     }
    // }

    return (
        <>
            <div className="listItem" 
            // onClick={modalClose}
            >
                <span className="ranking">{idx+1}</span>
                <img src={image} alt={title} />
            </div>       
            {/* <>{modalOpen && <Modal movieId={movieId} modalClose={modalClose}></Modal>}</> */}
        </>
    )
}