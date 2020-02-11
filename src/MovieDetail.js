import React, { Component } from 'react';

import keys from './config/keys';

class MovieDetail extends Component {
    state = {
        movie: {},
    }

    async componentDidMount() {
        try {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${keys.api_key}&language=en-US`);
                                                                        //This is from the API Doc!
            const movie = await res.json();
            this.setState({
                movie,
            // Shorted For: movie: movie,
            });
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
        }
    }

    render() {
        const { movie } = this.state;
        return (
            <div>
                <img src={`${keys.BACKDROP_PATH}${movie.poster_path}`} alt={movie.title} />
                <h1>{movie.title}</h1>
                <h4>{movie.release_date}</h4>
                <p>{movie.overview}</p>
            </div>
        )
    }

}

export default MovieDetail;