import { useState, useEffect } from "react";
import { getMovies } from "../utils/api";

function useMode(defaultVal) {
    const [mode, setMode] = useState(defaultVal);
    
    const setModeChangeHandler = (event) => {
        setMode(event.target.value); 
    }

    return [mode, setModeChangeHandler];
}

function useMovieList(defaultVal) {
    const [movieList, setMovieList] = useState(defaultVal);
    const [loading, setLoading] =useState(true);

    useEffect(() => {
        getMovies().then( (movies) => {
            setMovieList(movies);
            setLoading(false);
        });

        return () => {
            setLoading(true);
        };
    }, []);
    

    return [movieList, loading];
}

export {useMode, useMovieList};