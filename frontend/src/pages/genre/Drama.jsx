import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom"; // Import Link for navigation
import "./genre.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch movies from the backend
  const fetchMovies = async () => {
    try {
      const response = await axios.get("http://localhost:3005/api/v1/movies?genre=drama");
      setMovies(response.data.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setLoading(false);
    }
  };

  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const token = localStorage.getItem("authToken"); // Get token from local storage

    // Check if the user is logged in
    if (!token) {
      navigate("/loginPlease"); // Redirect to login page if not logged in
    } else {
      fetchMovies(); // Fetch movies if logged in
    }
  }, [navigate]); // Add navigate to the dependency array


  if (loading) {
    return <h2>Loading movies...</h2>;
  }

  return (
    <div className="movie-list">
      <h2>Drama</h2>
      <ul>
        {Array.isArray(movies) && movies.length > 0 ? (
          movies.map((movie) => (
            <li key={movie._id}>
              <img
                src={`http://localhost:3005/img/movies/${movie.poster}`}
                alt={`${movie.name} poster`}
              />
              <div className="movie-details">
                <h3>
                  {movie.name} ({movie.episodes} episodes)
                </h3>
                <p>Rating: {movie.rating || "N/A"}</p>
                <p>{movie.description}</p>

                <Link to={`/MovieDetails/${movie._id}`}>
                  <button className="netflix-button">watch now</button>
                </Link>
              </div>
            </li>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </ul>
    </div>
  );
};

export default MovieList;
