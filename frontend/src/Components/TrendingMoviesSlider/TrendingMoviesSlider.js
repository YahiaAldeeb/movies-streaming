import React, { useState, useEffect } from 'react';
import './TrendingMoviesSlider.css'; // Ensure you import your styles

// Simulating fetching data from a database
const fetchTrendingMovies = async (genre) => {
  const allMovies = {
    Comedy: [
      { id: 1, title: 'Superbad', image: 'url-to-image', genre: 'Comedy' },
      { id: 2, title: 'Step Brothers', image: 'url-to-image', genre: 'Comedy' },
      { id: 3, title: 'The Hangover', image: 'url-to-image', genre: 'Comedy' },
      { id: 4, title: 'Anchorman', image: 'url-to-image', genre: 'Comedy' },
      { id: 5, title: 'Bridesmaids', image: 'url-to-image', genre: 'Comedy' },
      { id: 6, title: '21 Jump Street', image: 'url-to-image', genre: 'Comedy' },
    ],
    Action: [
      { id: 1, title: 'Rebel Ridge', image: 'url-to-image', genre: 'Action' },
      { id: 2, title: 'Mad Max: Fury Road', image: 'url-to-image', genre: 'Action' },
      { id: 3, title: 'John Wick', image: 'url-to-image', genre: 'Action' },
      { id: 4, title: 'The Dark Knight', image: 'url-to-image', genre: 'Action' },
      { id: 5, title: 'Gladiator', image: 'url-to-image', genre: 'Action' },
      { id: 6, title: 'Inception', image: 'url-to-image', genre: 'Action' },
    ],
    Drama: [
      { id: 1, title: 'The Godfather', image: 'url-to-image', genre: 'Drama' },
      { id: 2, title: 'Forrest Gump', image: 'url-to-image', genre: 'Drama' },
      // Add more drama movies...
    ],
    Romantic: [
      { id: 1, title: 'Pride and Prejudice', image: './netflix background.jpg', genre: 'Romantic' },
      { id: 2, title: 'The Notebook', image: 'url-to-image', genre: 'Romantic' },
      // Add more romantic movies...
    ],
  };

  return allMovies[genre] || [];
};

function TrendingMoviesSlider() {
  const [selectedGenre, setSelectedGenre] = useState('Comedy');
  const [movies, setMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const moviesToShow = 2;// Number of movies to show at once
  const scrollByMovies = 1; // Number of movies to scroll by

  useEffect(() => {
    const fetchMovies = async () => {
      const trendingMovies = await fetchTrendingMovies(selectedGenre);
      setMovies(trendingMovies);
      setStartIndex(0); // Reset index when genre changes
    };
    fetchMovies();
  }, [selectedGenre]);

  useEffect(() => {
    setVisibleMovies(movies.slice(startIndex, startIndex + moviesToShow));
  }, [movies, startIndex]);

  const scrollLeft = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - scrollByMovies, 0));
  };

  const scrollRight = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + scrollByMovies, movies.length - moviesToShow));
  };

  return (
    <div className="trending-now">
      <h2>Trending Now</h2>
      <div className="controls">
        <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
          <option value="Comedy">Comedy</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Romantic">Romantic</option>
        </select>
      </div>
      <div className="slider-wrapper">
        <button className="scroll-left" id="left-arrow" onClick={scrollLeft}>◀</button>
        <div className="slider">
          {visibleMovies.map(movie => (
            <div key={movie.id} className="movie-card">
              <img src={movie.image} alt={movie.title} />
              <div>{movie.title}</div>
            </div>
          ))}
        </div>
        <button className="scroll-right" id="right-arrow" onClick={scrollRight}>▶</button>
      </div>
    </div>
  );
}

export default TrendingMoviesSlider;
