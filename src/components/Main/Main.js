import React from "react";
import PropTypes from "prop-types";
import ResultsPanel from '../ResultsPanel/ResultsPanel';
import MovieItem from '../MovieItem/MovieItem';
import NotFoundMessage from '../NotFoundMessage/NotFoundMessage';
import './Main.scss';

const Main = (props) => {
  const hasMovies = !!props.movies.length;

  return (
    <main className={'main'}>
      <ResultsPanel selectedMovieData={props.selectedMovieData} moviesAmount={props.movies.length}/>
      <div className={'wrapper'}>
        {props.movies.map((movie) => <MovieItem onSelectMovie={props.onSelectMovie} key={movie.id} movieData={movie}/>)}
        {!hasMovies && <NotFoundMessage/>}
      </div>
    </main>
  );
};

export default Main;

Main.propTypes = {
  movies: PropTypes.array,
  onSelectMovie: PropTypes.func,
  selectedMovieData: PropTypes.object,
};
