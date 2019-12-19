import React, {Component} from 'react';
import PropTypes from "prop-types";
import {moviesFetchData, setSorting} from "../../actions/actions";
import {connect} from "react-redux";
import SearchResultsPanel from "./SearchResultsPanel";


const GenreResultsPanelContainer = (props) => {

  //const selectedMovieData = props.selectedMovieData;
  //const resultsTitleText = selectedMovieData ? `Films by ${selectedMovieData.genres[0]} genre` : `${props.moviesAmount} movies found`;

  return (
    <SearchResultsPanel resultsTitleText={`Films by ${props.selectedMovie.genres[0]} genre`}/>
  );
};

const mapStateToProps = (state) => {
  return {
    searchBy: state.searchBy,
    sortBy: state.sortBy,
    search: state.search,
    movies: state.movies,
    selectedMovie: state.selectedMovie
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSorting: (sort) => dispatch(setSorting(sort)),
    fetchData: (sortBy, search, searchBy) => dispatch(moviesFetchData(sortBy, search, searchBy))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreResultsPanelContainer);

GenreResultsPanelContainer.propTypes = {
  moviesAmount: PropTypes.number,
  selectedMovieData: PropTypes.object,
  fetchData: PropTypes.func,
  searchBy: PropTypes.string,
  search: PropTypes.string,
  sortBy: PropTypes.string,
  movies: PropTypes.array,
  setSorting: PropTypes.func,
  setFilter: PropTypes.func,
  selectedMovie: PropTypes.object
};
