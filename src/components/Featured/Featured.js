import React,{useState} from 'react';
import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import { Link } from 'react-router-dom';
import {Modal} from '../../components'
import './featured.scss'

const Featured = ({image, title, desc, id, type, originalTitle}) => {

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
        <div className="featured">
            <img src={image} alt={title} />
                    
            <div className="info">
                <h1>{title}</h1>
                <h2>{originalTitle}</h2>
                {/* <span className="desc">{desc}</span> */}
                <div className="buttons">
                    <button className="play">
                        <Link to={`/watch/${type}/${id}`}>
                            <PlayArrow />
                            <span>Play</span>
                        </Link>
                    </button>
                    <button className="more" onClick={modalClose}>
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
            {modalOpen && <Modal id={id} type={type} modalClose={modalClose}/>}
        </div>
    )
}

export default Featured
