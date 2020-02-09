import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
  // {movie} is shorted for props because of ES6 Object Destructuring
  <Link to={`/${movie.id}`} >
    <div>
      <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
    </div>
  </Link>
);

export default Movie;


/* Rules:
  1. Every Prop should have a propType.
  2. '.isRequired or defaultProps' should be included for Checking Type Errors.
*/
Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};
