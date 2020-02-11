import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import keys from './config/keys';

const Movie = ({ movie }) => (
  // {movie} is shorted for props because of ES6 Object Destructuring
  <Link to={`/${movie.id}`} >
    <div>
      <img src={`${keys.POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
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
