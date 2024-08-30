import React from 'react';

const MovieCard = ({ title, image }) => {
  const imageUrl = `https://test.create.diagnal.com/images/${image}`;
  
  return (
    <div className="movie-card">
      <img src={imageUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default MovieCard;
