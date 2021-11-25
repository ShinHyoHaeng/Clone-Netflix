import React, { useState, useEffect } from 'react'
import { Featured, Navbar,Carousel, ListItem, Loader } from '../../components';
import {API_URL, API_KEY, IMAGE_BASE_URL} from '../../components/TMDB/TMDB'
import './home.scss'

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [popMovies, setPopMovies] = useState([]);
    const [popSeries, setPopSeries] = useState([]);
    const [featuredImg, setFeaturedImg] = useState(null);

    useEffect(() => {
        
        const endpointPopM = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        const endpointPopTV = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=1`;

        fetch(endpointPopM)
        .then((response) => (response.json()))
        .then((response) => {
            console.log(response.results);
            setPopMovies(response.results);
            setFeaturedImg(featuredImg || response.results[0]);
            setLoading(false)
        });

         fetch(endpointPopTV)
        .then((response) => (response.json()))
        .then((response) => {
            console.log(response.results);
            setPopSeries(response.results);
            setLoading(false)
        });

    }, []);

    const popMovieItems = popMovies.map((popMovie, index) => (
        <ListItem key={index}
            idx={index}
            image={popMovie.poster_path ? `${IMAGE_BASE_URL}w500${popMovie.poster_path}`:null}
            id={popMovie.id}
            title={popMovie.original_title}
            type='movie'
        />
    ))

    const popSeriesItems = popSeries.map((popSeries, index) => (
        <ListItem key={index}
            idx={index}
            image={popSeries.poster_path ? `${IMAGE_BASE_URL}w500/${popSeries.poster_path}`:null}
            id={popSeries.id}
            title={popSeries.original_name}
            type='tv'
        />
    ))

    return (
        <>
            {loading?
                <Loader/>
            :
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
                        <span className="listTitle">Popular Movies</span>
                        {
                            popMovieItems.length > 0 ?
                            <Carousel>{popMovieItems}</Carousel>
                            : null
                        }  
                    </div>

                    <div className="list">
                        <span className="listTitle">Popular TV Series</span>
                        {
                            popSeriesItems.length > 0 ?
                            <Carousel>{popSeriesItems}</Carousel>
                            : null
                        }  
                    </div>
                </div>
            }
        </>
    )
}

export default Home
