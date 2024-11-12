import React, { useState } from 'react';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';

interface Movie {
    id: string;
    title: string;
    year: number;
    genre: string;
    rating: number;
}

const App: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    const addMovie = (movie: Movie) => {
        setMovies((prevMovies) => [...prevMovies, movie]);
    };

    const deleteMovie = (id: string) => {
        setMovies((prevMovies) => prevMovies.filter(movie => movie.id !== id));
    };

    return (
        <div>
            <h1>Трекер фильмов</h1>
            <MovieForm onAddMovie={addMovie} />
            <MovieList movies={movies} onDeleteMovie={deleteMovie} />
        </div>
    );
};

export default App;