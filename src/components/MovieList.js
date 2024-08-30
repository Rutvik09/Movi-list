import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { fetchMovies } from "../services/movieService";
// import MovieCard from './MovieCard';
// import { fetchMovies } from '../services/movieService';
import './style.css'; // Ensure to import the CSS file

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchMovies(1);
      setMovies(moviesData);
    };

    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.name}
          image={movie["poster-image"]}
        />
      ))}
    </div>
  );
};

export default MovieList;
