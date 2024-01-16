import React from "react";
import PropTypes from 'prop-types';

import { getMovies } from "../utils/api";

function MoviesDisplay({modeDisplay}) {
    const [movieList, setMovieList] = React.useState([]);
    const [loading, setLoading] =React.useState(true);
    
    React.useEffect(() => {
        getMovies().then( (movies) => {
            setMovieList(movies);
            setLoading(false);
        });

        return () => {
            setLoading(true);
        };
    }, []);

    if(loading) {
        return (
            <div className="movies-list">
                <p>loading...</p>
            </div>
        );
    }

    if(modeDisplay === 'list') {
        return(
            <ul className="movies-list">
                {
                    movieList.map( (movie) => {
                        return (
                            <li key={movie.id} className="movies-list-item">
                                <h1>{movie.title}</h1>
                                <p>{movie.overview}</p>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }

    
}
    MoviesDisplay.propTypes = {
        modeDisplay : PropTypes.string.isRequired
    }

export default MoviesDisplay;