import React, { useState, useEffect } from 'react';
import './TrendingMoviesSlider.css'; // Ensure you import your styles

// Simulating fetching data from a database
const fetchTrendingMovies = async (genre) => {
  const allMovies = {
    Comedy: [
      { id: 1, title: 'Superbad', image: 'https://i.pinimg.com/564x/1b/3a/3a/1b3a3afb4c3d348082941fde1d41ba30.jpg', genre: 'Comedy' },
      { id: 2, title: 'Step Brothers', image: 'https://i.pinimg.com/564x/ac/d1/f1/acd1f13b7a59e8a8a14559d8564872a4.jpg', genre: 'Comedy' },
      
      { id: 3, title: 'Anchorman', image: 'https://i.pinimg.com/originals/32/91/23/329123f97a4c94fe0636698c1fb0d874.gif', genre: 'Comedy' },
      { id: 4, title: 'The Hangover', image: 'https://i.pinimg.com/736x/9c/5b/5e/9c5b5ed2b5d2c6a12b7de3b84b357086.jpg', genre: 'Comedy' },
      { id: 5, title: 'Bridesmaids', image: 'https://i.pinimg.com/enabled_lo/564x/3b/92/2d/3b922d6f75d3a9df60e1d77bb5458f13.jpg', genre: 'Comedy' },
      { id: 6, title: '21 Jump Street', image: 'https://i.pinimg.com/736x/e2/22/a6/e222a60bd60225ff2e1ab4603c187d73.jpg', genre: 'Comedy' },
    ],
    Action: [
      { id: 1, title: 'Rebel Ridge', image: 'https://i.pinimg.com/736x/a6/f4/22/a6f422668744ad05d2001dc414f6768a.jpg', genre: 'Action' },
      { id: 2, title: 'Mad Max: Fury Road', image: 'https://i.pinimg.com/564x/c3/e6/34/c3e634ab06efa4bd37f239e8604cef48.jpg', genre: 'Action' },
      { id: 3, title: 'John Wick', image: 'https://i.pinimg.com/564x/99/bb/9b/99bb9bdc22466bbe980e7a3269a6d8c6.jpg', genre: 'Action' },
      { id: 4, title: 'The Dark Knight', image: 'https://i.pinimg.com/enabled_lo/564x/5d/55/f6/5d55f69bbe7948d202dffbbea4b857d8.jpg', genre: 'Action' },
      { id: 5, title: 'Gladiator', image: 'https://i.pinimg.com/enabled_lo/736x/df/f2/c3/dff2c314ad38bae5df9875c36689acfb.jpg', genre: 'Action' },
      { id: 6, title: 'Inception', image: 'https://i.pinimg.com/564x/ad/0a/e6/ad0ae638b250f15bd3d922528cf82026.jpg', genre: 'Action' },
    ],
    Drama: [
      { id: 1, title: 'The Godfather', image: 'https://i.pinimg.com/enabled_lo/564x/ad/7f/82/ad7f825e9c74698a9dd7ab390071a5da.jpg', genre: 'Drama' },
      { id: 2, title: 'Forrest Gump', image: 'https://i.pinimg.com/enabled_lo/564x/8e/d7/a9/8ed7a9baeae932abec095d109d306fb3.jpg', genre: 'Drama' },
      { id: 3, title: 'The Shawshank Redemption', image: 'https://i.pinimg.com/564x/5c/b7/ba/5cb7baf1730fa6722e18a5f7d5a6a2a0.jpg', genre: 'Drama' },
      { id: 4, title: 'Parasite', image: 'https://i.pinimg.com/enabled_lo/564x/a9/7d/26/a97d26449214bb756c75b4ed88d7b06e.jpg', genre: 'Drama' },
      { id: 5, title: 'The Pursuit of Happyness', image: 'https://i.pinimg.com/enabled_lo/564x/dd/4f/a0/dd4fa0752e4662e768e441f8d748492f.jpg', genre: 'Drama' },
    ],
    Romantic: [
      { id: 1, title: 'Pride and Prejudice', image: 'https://i.pinimg.com/enabled_lo/564x/00/a9/f6/00a9f6438990cb441205e351f5d81f3e.jpg', genre: 'Romantic' },
      { id: 2, title: 'The Notebook', image: 'https://i.pinimg.com/enabled_lo/564x/ff/2b/ae/ff2bae022d628fd505838bdd0c3f1b33.jpg', genre: 'Romantic' },
      { id: 3, title: 'La La Land', image: 'https://i.pinimg.com/736x/cc/c5/69/ccc569b30de5f4eae39f1e6c39ece00b.jpg', genre: 'Romantic' },
      { id: 4, title: 'Titanic', image: 'https://i.pinimg.com/enabled_lo/564x/44/55/d9/4455d96357fb041d1cf3c8a5264ed593.jpg', genre: 'Romantic' },
      { id: 5, title: 'A Walk to Remember', image: 'https://i.pinimg.com/enabled_lo/564x/bb/4b/3c/bb4b3c19d4e0a2fbd439dee3aedf524f.jpg', genre: 'Romantic' },
    ],
  };

  return allMovies[genre] || [];
};





function TrendingMoviesSlider() {
  const [selectedGenre, setSelectedGenre] = useState('Comedy');
  const [movies, setMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const moviesToShow = 3;// Number of movies to show at once
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
