import React,{useState} from 'react';
import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import { Link } from 'react-router-dom';
import './featured.scss'

const Featured = ({image, title, desc, movieId}) => {

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
        <div className="featured">
            <img src={image} alt={title} />
                    
            <div className="info">
                <h1>{title}</h1>
                <span className="desc">{desc}</span>
                <div className="buttons">
                    <button className="play">
                        <Link to={`/watch/${movieId}`}>
                            <PlayArrow />
                            <span>Play</span>
                        </Link>
                    </button>
                    <button className="more"
                    //  onClick={modalClose}
                     >
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
            {/* {modalOpen && 
                <Modal movieId={movieId} modalClose={modalClose}/>
            } */}
        </div>
    )
}

export default Featured
