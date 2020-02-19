import React, { PureComponent } from 'react';

import Movie from './Movie';
import keys from './config/keys';

import { MovieGrid } from './styledComponents';

class MoviesList extends PureComponent {
    state = {
        movies: [],
    }

    async componentDidMount() {
        try {
            const res = await fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=${keys.api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
            );
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
        return (
            <MovieGrid>
                {movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
            </MovieGrid>
        )
    }

}

export default MoviesList;