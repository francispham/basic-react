import React, { Component } from 'react';

import Movie from './Movie';
import keys from './config/keys';

class MoviesList extends Component {
    state = {
        movies: [],
    }

    async componentDidMount() {
        try {
            const res = await fetch(keys.moviesAPI);
            const movies = await res.json();
            this.setState({
                movies: movies.results,
            });
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
        }
    }
    
    render() {
        const { movies } = this.state;
        console.log(movies)
        return (
            <div>
                {movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
            </div>
        )
    }

}

export default MoviesList;