import React, {useEffect, useState} from 'react';
import {API_URL, API_KEY } from '../../components/TMDB/TMDB'
import { ArrowBackOutlined } from '@material-ui/icons'
import './watch.scss'
import {YoutubeEmbed} from '../../components'
import { Link, useParams } from 'react-router-dom';

const Watch = () => {
    const {id, type} = useParams();
    const [video, setVideo] = useState([]);
    const [embedId, setEmbedId] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        const endpoint = `${API_URL}${type}/${id}/videos?api_key=${API_KEY}`;
        fetch(endpoint)
        .then((response) => (response.json()))
        .then((response) => {
            setVideo(response.results)
            setEmbedId(response.results[0].key)
            setName(response.results[0].name)
        });
    }, []);
    return (
        <div className="watch">
            <div className="back">
                <Link to="/home">
                    <ArrowBackOutlined/> 
                    Home
                </Link>
            </div>
            {video && <YoutubeEmbed embedId={embedId} name={name}/>}
        </div>
    )
}

export default Watch
