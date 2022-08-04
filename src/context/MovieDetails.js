import { createContext, useContext } from 'react';

const MovieDetailsContext = createContext();

function MovieDetailsProvider(props) {
    return <MovieDetailsContext.Provider {...props} />;
}

export function useMovieDetails() {
    return useContext(MovieDetailsContext);
}

export default MovieDetailsProvider;
