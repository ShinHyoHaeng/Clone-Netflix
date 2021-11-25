import React from 'react'
import { useEffect, useState } from 'react';
import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined, Star } from '@material-ui/icons'
import {API_URL, API_KEY, IMAGE_BASE_URL } from '../TMDB/TMDB'
import { Link } from 'react-router-dom';

const Detail = ({id, modalClose, type}) => {

    const [content, setContent] = useState([]);
    const [casts, setCasts] = useState([]);
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        let endpoint = `${API_URL}${type}/${id}?api_key=${API_KEY}`;
        let endpointCrews = `${API_URL}${type}/${id}/credits?api_key=${API_KEY}`;
        let endpointProv = `${API_URL}${type}/${id}/watch/providers?api_key=${API_KEY}`;

        fetch(endpoint)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            setContent(response);
        });

        fetch(endpointCrews)
        .then(response => response.json())
        .then(response => {
            setCasts(response.cast);
            console.log(response.cast);
        });

        fetch(endpointProv)
        .then(response => response.json())
        .then(response => {
            setProviders(response.results.US.flatrate);
            console.log(response.results.US.flatrate);
        })
        .catch(err => {
            console.log('no providers')
        });
    },[])

    const casts_main = casts.slice(0,3);

    return (
        <>
            <div className="itemImg">
                {content.backdrop_path &&
                    <img src={`${IMAGE_BASE_URL}w1280${content.backdrop_path}`} alt={content.title}/>
                }
                <div className="itemText">
                    <h1>{content.original_title? content.original_title :content.original_name}</h1>
                    <p className="providers">
                        {
                            providers ?
                            (providers.map((provider, index) => (
                                <img key={index} src={`${IMAGE_BASE_URL}original/${provider.logo_path}`} alt={provider.provider_name}/>
                            ))) : ''
                        }
                    </p>
                </div>
            </div>
            <div className="itemInfo">
                <div className="icons">
                    {/* 링크는 state 가져갈 수 있음! 성용쌤 강의내용 참고할 것! */}
                    <Link to={`/watch/${id}`} className="playBtn" onClick={modalClose}>
                        <button><PlayArrow/></button>
                    </Link>  
                    <Add className="icon"/>
                    <ThumbUpAltOutlined className="icon"/>
                    <ThumbDownOutlined className="icon"/>
                </div>
                <div className="itemInfoTop">
                    {content.runtime && <span> {content.runtime} mins.</span>}
                    {content.episode_run_time? <span>{(content.episode_run_time)[0]} mins.</span>:null}
                    <span className="limit"><Star className="icon"/> {content.vote_average}</span>
                    <span>{content.release_date && content.release_date}</span>
                        {content.last_air_date?
                        <span>{content.first_air_date} ~ {content.last_air_date}</span> : <span>{content.first_air_date}</span>}
                    
                </div>
                <p className="casts">
                        {
                            casts_main &&
                            casts_main.map((cast, index)=>(
                                <span key={index}>{cast.character}({cast.name}) </span>
                            ))
                        }
                    </p>
                <p className="desc">{content.overview}</p>
            </div>
        </>
    )
}

export default Detail
