import React, { useState, useEffect } from 'react'
import { Featured, Navbar,Carousel, ListItem, Loader } from '../../components';
import {API_URL, API_KEY, IMAGE_BASE_URL} from '../../components/TMDB/TMDB'
import './movies.scss'

const Movies = () => {
    const [loading, setLoading] = useState(true)
    const [popMovies, setPopMovies] = useState([]);
    const [upComings, setUpComings] = useState([]);
    const [topRateds, setTopRateds] = useState([]);

    useEffect(() => {
        
        const popular = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&region=KR&page=1`;
        const upComing = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=ko-KR&region=KR&page=1`;
        const topRated = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=ko-KR&region=KR&page=1`;

        fetch(popular)
        .then((response) => (response.json()))
        .then((response) => {
            console.log(response.results);
            setPopMovies(response.results);
            setLoading(false)
        });

        fetch(upComing)
        .then((response) => (response.json()))
        .then((response) => {
            console.log(response.results);
            setUpComings(response.results);
            setLoading(false)
        });

        fetch(topRated)
        .then((response) => (response.json()))
        .then((response) => {
            console.log(response.results);
            setTopRateds(response.results);
            setLoading(false)
        });

    }, []);

    const popMovieItems = popMovies.map((popMovie, index) => (
        <ListItem key={index}
            idx={index}
            image={popMovie.poster_path? `${IMAGE_BASE_URL}w500${popMovie.poster_path}`:null}
            id={popMovie.id}
            title={popMovie.title}
            originalTitle={popMovie.original_title}
            type='movie'
        />
    ))

    const upComingMovieItems = upComings.map((upComing, index) => (
        <ListItem key={index}
            idx={index}
            image={upComing.poster_path? `${IMAGE_BASE_URL}w500${upComing.poster_path}`:null}
            id={upComing.id}
            title={upComing.title}
            originalTitle={upComing.original_title}
            type='movie'
        />
    ))

    const topRatedMovieItems = topRateds.map((topRated, index) => (
        <ListItem key={index}
            idx={index}
            image={topRated.poster_path? `${IMAGE_BASE_URL}w500${topRated.poster_path}`:null}
            id={topRated.id}
            title={topRated.title}
            originalTitle={topRated.original_title}
            type='movie'
        />
    ))

     return (
        <>
            {loading?
                <Loader/>
            :
                <div className="movies">
                    <Navbar />
                    <div className="list">
                        <span className="listTitle">Popular</span>
                        {
                            popMovieItems.length > 0 ?
                            <Carousel>{popMovieItems}</Carousel>
                            : null
                        }  
                    </div>
                    <div className="list">
                        <span className="listTitle">Top Rated</span>
                        {
                            topRatedMovieItems.length > 0 ?
                            <Carousel>{topRatedMovieItems}</Carousel>
                            : null
                        }  
                    </div>
                    <div className="list">
                        <span className="listTitle">Upcoming</span>
                        {
                            upComingMovieItems.length > 0 ?
                            <Carousel>{upComingMovieItems}</Carousel>
                            : null
                        }  
                    </div>
                </div>
            }
        </>
    )
}

export default Movies
