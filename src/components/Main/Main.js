import React from "react";
import PropTypes from "prop-types";
import MovieItem from '../MovieItem/MovieItem';
import MoviesNotFoundMessage from '../MoviesNotFoundMessage/MoviesNotFoundMessage';
import './Main.scss';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const Main = (props) => {
  const hasMovies = !!props.movies.length;

  return (
    <main className={'main'}>
      {props.ResultsPanel}
      <div className={'wrapper'}>
        {props.movies.map((movie) => <Link to={`/movie/${movie.id}`} key={movie.id}><MovieItem movieData={movie}/></Link>)}
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
  ResultsPanel: PropTypes.object
};
