import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './MovieDetails.css';  // Import the custom CSS for Netflix-style theme

const MovieDetails = () => {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://localhost:3005/api/v1/movies/${id}`);
        setMovie(response.data.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return <h2>Loading movie details...</h2>;
  }

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="movie-details-page">
      <button className="back-button" onClick={() => navigate(-1)}>← Go Back</button>
      <div className="movie-details-container">
        <img src={`http://localhost:3005/img/movies/${movie.poster}`} alt={`${movie.name} poster`} className="movie-poster" />
        <div className="movie-info">
          <h1>{movie.name}</h1>
          <p className="movie-episodes">Episodes: {movie.episodes}</p>
          <p className="movie-description">{movie.description}</p>
          <p className="movie-rating">Rating: {movie.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
