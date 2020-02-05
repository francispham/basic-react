import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ movie }) => (
  // {movie} is shorted for props because of ES6 Object Destructuring
  <div>
    <h3>{movie.title}</h3>
    {/* props.movie.title */}
  </div>
);

export default Movie;


/* Rules:
  1. Every Prop should have a propType.
  2. '.isRequired or defaultProps' should be included for Checking Type Errors.
*/
Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
