import React from "react";
import PropTypes from "prop-types";
import MovieItem from '../MovieItem/MovieItem';
import MoviesNotFoundMessage from '../MoviesNotFoundMessage/MoviesNotFoundMessage';
import './Main.scss';
import {connect} from "react-redux";

const Main = (props) => {
  const hasMovies = !!props.movies.length;

  return (
    <main className={'main'}>
      {props.resultsPanel}
      <div className={'wrapper'}>
        {props.movies.map((movie) => <MovieItem key={movie.id} movieData={movie}/>)}
        {!hasMovies && <MoviesNotFoundMessage/>}
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps)(Main);

Main.propTypes = {
  movies: PropTypes.array,
  resultsPanel: PropTypes.object
};
