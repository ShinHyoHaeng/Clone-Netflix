import React, { useState, useEffect } from 'react'
import { Featured, Navbar,Carousel, ListItem } from '../../components';
import {API_URL, API_KEY, IMAGE_BASE_URL} from '../../components/TMDB/TMDB'
import './home.scss'

const Home = () => {
    
    const [movies, setMovies] = useState([]);
    const [featuredImg, setFeaturedImg] = useState(null);

    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        fetch(endpoint)
        .then((response) => (response.json()))
        .then((response) => {
            console.log(response.results);
            setMovies(response.results);
            setFeaturedImg(featuredImg || response.results[0]);
        });
    }, []);

    const listItems = movies.map((movie, index) => (
        <ListItem key={index}
            idx={index}
            image={movie.poster_path ? `${IMAGE_BASE_URL}w500/${movie.poster_path}`:null}
            movieId={movie.id}
            title={movie.original_title}
        />
    ))
    return (
        <div className="home">
            <Navbar />
            <div className="visualArea">
                {featuredImg &&
                    <Featured image={`${IMAGE_BASE_URL}w1280/${featuredImg.backdrop_path}`}
                        title={featuredImg.original_title}
                        desc={featuredImg.overview}
                        movieId={featuredImg.id}
                    />
                }
            </div>

            <div className="list">
                <span className="listTitle">title</span>
                {
                    listItems.length > 0 ?
                    <Carousel>{listItems}</Carousel>
                    : null
                }  
            </div>
        </div>
    )
}

export default Home
