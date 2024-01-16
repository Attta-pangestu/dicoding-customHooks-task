import PropTypes from 'prop-types';

import { useMovieList } from "../hooks/setHooks";

function MoviesDisplay({modeDisplay}) {
    const [movieList, loading] = useMovieList([]);
    console.log(movieList);
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

    if(modeDisplay === 'grid') {
        return (
            <div className="movies-grid">
                {
                    movieList.map( movie => {
                        return(
                        <div key={movie.id} className="movies-grid-item">
                            <img src={movie.poster} />
                            <div className="movie-grid-item-info">
                                <h1>{movie.title}</h1>
                                <p>{movie.overview}</p>
                            </div>
                        </div>
                        );
                    })
                
                }
            </div>
            
        );
    }

    
}
    MoviesDisplay.propTypes = {
        modeDisplay : PropTypes.string.isRequired
    }

export default MoviesDisplay;