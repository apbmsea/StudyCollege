import React from 'react';

interface Movie {
    id: string;
    title: string;
    year: number;
    genre: string;
    rating: number;
}

interface MovieListProps {
    movies: Movie[];
    onDeleteMovie: (id: string) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onDeleteMovie }) => {
    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <h3>{movie.title} ({movie.year})</h3>
                    <p>Жанр: {movie.genre}</p>
                    <p>Оценка: {movie.rating}</p>
                    <button onClick={() => onDeleteMovie(movie.id)}>Удалить</button>
                </li>
            ))}
        </ul>
    );
};

export default MovieList;
