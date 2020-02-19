import React, { Component } from 'react';
import Overdrive from 'react-overdrive';

import keys from './config/keys';

import { Poster, MovieWrapper, MovieInfo } from "./styledComponents";

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
            <MovieWrapper backdrop={`${keys.BACKDROP_PATH}${movie.poster_path}`}>
                <MovieInfo>
                    <Overdrive id={movie.id}>
                        <Poster src={`${keys.POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
                    </Overdrive>
                    <div>
                        <h1>{movie.title}</h1>
                        <h4>{movie.release_date}</h4>
                        <p>{movie.overview}</p>
                    </div>
                </MovieInfo>
            </MovieWrapper>
        );
    }

}

export default MovieDetail;