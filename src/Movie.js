import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Movie extends Component {
    // Rules: Every Prop should have a propType, & '.isRequired or defaultProps' should be included for Checking Type Errors
    static propTypes = {
        movie: PropTypes.shape({
            title: PropTypes.string.isRequired,
            desc: PropTypes.string
        })
    }

    render() {
        return (
            <div>
                <h3>{this.props.movie.title}</h3>
            </div>
        );
    }
}