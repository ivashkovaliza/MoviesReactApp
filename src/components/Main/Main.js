import React, { Component } from "react";
import './Main.scss';
import ResultsPanel from '../resultsPanel/resultsPanel';
import MovieItem from '../MovieItem/MovieItem';
import PropTypes from "prop-types";

const Main = (props) => {
  console.log('main',props);
  return (
    <main className={'main'}>
      <ResultsPanel selectedMovieData={props.selectedMovieData} moviesAmount={props.movies.length}/>
      <div className={'wrapper'}>
        {props.movies.map((movie, i) => <MovieItem onSelectFilm={props.onSelectFilm} key={i}  movieData={movie} />)}
      </div>
    </main>
  );
};

export default Main;

Main.propTypes = {
  movies: PropTypes.array,
  onSelectFilm: PropTypes.func,
  selectedMovieData: PropTypes.object,
};