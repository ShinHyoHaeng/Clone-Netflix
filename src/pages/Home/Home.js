import React, { useState, useEffect } from 'react'
import { Featured, Navbar,Carousel, ListItem, Loader } from '../../components';
import {API_URL, API_KEY, IMAGE_BASE_URL} from '../../components/TMDB/TMDB'
import './home.scss'

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [popMovies, setPopMovies] = useState([]);
    const [popSeries, setPopSeries] = useState([]);
    const [Trendings, setTrendings] = useState([]);
    const [featuredImg, setFeaturedImg] = useState(null);

    useEffect(() => {
        
        const endpointPopM = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&region=KR&page=1`;
        const endpointPopTV = `${API_URL}tv/popular?api_key=${API_KEY}&language=ko-KR&region=KR&page=1`;
        const endpointTrend = `${API_URL}trending/all/day?api_key=${API_KEY}&language=ko-KR&region=KR`;

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

        fetch(endpointTrend)
        .then((response) => (response.json()))
        .then((response) => {
            console.log(response.results);
            setTrendings(response.results);
            setLoading(false)
        });

    }, []);

    const popMovieItems = popMovies.map((popMovie, index) => (
        <ListItem key={index}
            idx={index}
            image={popMovie.backdrop_path ? `${IMAGE_BASE_URL}w500${popMovie.backdrop_path}`:null}
            id={popMovie.id}
            title={popMovie.title}
            originalTitle={popMovie.original_title}
            type='movie'
        />
    ))

    const popSeriesItems = popSeries.map((popSeries, index) => (
        <ListItem key={index}
            idx={index}
            image={popSeries.backdrop_path? `${IMAGE_BASE_URL}w500/${popSeries.backdrop_path}`:null}
            id={popSeries.id}
            title={popSeries.name}
            originalTitle={popSeries.original_name}
            type='tv'
        />
    ))

    const trendItems = Trendings.map((Trending, index) => (
        
        <ListItem key={index}
            idx={index}
            image={Trending.poster_path ? `${IMAGE_BASE_URL}w500/${Trending.poster_path}`:null}
            id={Trending.id}
            title={Trending.name? Trending.name:Trending.title}
            originalTitle={Trending.original_name? Trending.original_name:Trending.original_title}
            type={Trending.media_type}
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
                                title={featuredImg.title}
                                originalTitle={featuredImg.original_title}
                                desc={featuredImg.overview}
                                id={featuredImg.id}
                                type='movie'
                            />
                        }
                    </div>
                    
                    <div className="list">
                        <span className="listTitle">What's Trending</span>
                        {
                            trendItems.length > 0 ?
                            <Carousel>{trendItems}</Carousel>
                            : null
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
