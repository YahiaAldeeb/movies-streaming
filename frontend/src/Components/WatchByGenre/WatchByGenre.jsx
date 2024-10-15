// src/Components/WatchByGenre/WatchByGenre.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './WatchByGenre.css'; // Create a CSS file for styles

const WatchByGenre = () => {
  const genres = [
    { name: 'Comedy', image: '../images/action.jpg', path: '/genre/comedy' },
    { name: 'Action', image: '../images/drama-subject-illustration-21a0f6.jpeg', path: '/genre/action' },
    { name: 'Romance', image: '../images/GettyImages-540775843-58b5a6015f9b586046963ed2.jpg', path: '/genre/romance' },
    { name: 'Drama', image: '../images/stand-up-comedy-banner-with-red-curtains-background-free-vector.jpg', path: '/genre/drama' },
  ];

  return (
    <div className="watch-by-genre">
      <h2 >Watch by Genre</h2>
      <div className="genre-cards">
        {genres.map((genre) => (
          <Link to={genre.path} className="genre-card" key={genre.name}>
            <img src={genre.image} alt={genre.name} />
            <h3>{genre.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WatchByGenre;
