import React, { useState } from 'react';

interface MovieFormProps {
    onAddMovie: (movie: Movie) => void;
}

interface Movie {
    id: string;
    title: string;
    year: number;
    genre: string;
    rating: number;
}

const MovieForm: React.FC<MovieFormProps> = ({ onAddMovie }) => {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState<number>(2024);
    const [genre, setGenre] = useState('Драма');
    const [rating, setRating] = useState<number>(10);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const newMovie = {
            id: crypto.randomUUID(),
            title,
            year,
            genre,
            rating,
        };
        onAddMovie(newMovie);
        setTitle('');
        setYear(2024);
        setGenre('');
        setRating(10);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Название фильма"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="number"
                min="1895"
                max={new Date().getFullYear()}
                placeholder="Год выпуска"
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                required
            />
            <input
                type="text"
                placeholder="Жанр"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                required
            />
            <input
                type="number"
                min="0"
                max="10"
                step="0.1"
                placeholder="Оценка"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                required
            />
            <button type="submit">Добавить фильм</button>
        </form>
    );
};

export default MovieForm;