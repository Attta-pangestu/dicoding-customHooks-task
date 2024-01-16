import { useState } from "react";

function useMode(defaultVal) {
    const [mode, setMode] = useState(defaultVal);
    
    const setModeChangeHandler = (event) => {
        setMode(event.target.value); 
    }

    return [mode, setModeChangeHandler];
}

function useMovieList(defaultVal) {
    const [movieList, setChange ] = useState(defaultVal);
    
    // ini tuh return callback
    const setChangeHandler = (movies) => {
        setChange(movies); 
    }

    return [movieList, setChangeHandler];
}

export {useMode, useMovieList};