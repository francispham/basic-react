import React, { Component } from 'react';

export default class Movie extends Component {
    render() {
        return (
            <div>
                {this.props.movie.title}
            </div>
        )
    }
}