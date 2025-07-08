import React from 'react';

const MovieCard = ({ movie: { Title, Year, Poster, imdbRating, Language, Type } }) => {
  return (
    <div className="movie-card">
      <img
        src={Poster !== 'N/A' ? Poster : '/no-movie.png'}
        alt={Title}
      />

      <div className="mt-4">
        <h3>{Title}</h3>

        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="Star Icon" />
            <p>{imdbRating !== 'N/A' ? imdbRating : 'N/A'}</p>
          </div>

          <span>•</span>
          <p className="lang">{Language || Type}</p>

          <span>•</span>
          <p className="year">{Year}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
