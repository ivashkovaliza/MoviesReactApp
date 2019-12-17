import React, {Component} from 'react';
import PropTypes from "prop-types";
import ResultsTitle from "../ResultsTitle/ResultsTitle";
import Toggle from "../Toggle/Toggle";
import './ResultsPanel.scss';
import {moviesFetchData, setFilter, setSorting} from "../../actions/actions";
import {connect} from "react-redux";


const ResultsPanel = (props) => {
  const toggleValues = {
    'release date': 'release_date',
    'rating': 'vote_average'
  };

  const handleToggleClick = (sortBy) => {

    props.setSorting(toggleValues[sortBy]);
    console.log(toggleValues[sortBy]);
    if(props.movies.length) {
      props.fetchData(toggleValues[sortBy], props.search, props.searchBy)
    }

  };

  const selectedMovieData = props.selectedMovieData;
  const resultsTitleText = selectedMovieData ? `Films by ${selectedMovieData.genres[0]} genre` : `${props.moviesAmount} movies found`;

  return (
    <div className={'result-panel'}>
      <div className={'result-panel__wrapper'}>
        <ResultsTitle title={resultsTitleText}/>
        {!selectedMovieData && <Toggle title='Sort by' handleToggleClick={handleToggleClick} toggleValues={['release date', 'rating']}/>}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchBy: state.searchBy,
    sortBy: state.sortBy,
    search: state.search,
    movies: state.movies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSorting: (sort) => dispatch(setSorting(sort)),
    fetchData: (sortBy, search, searchBy) => dispatch(moviesFetchData(sortBy, search, searchBy))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPanel);

ResultsPanel.propTypes = {
  moviesAmount: PropTypes.number,
  selectedMovieData: PropTypes.object,
  fetchData: PropTypes.func,
  searchBy: PropTypes.string,
  search: PropTypes.string,
  sortBy: PropTypes.string,
  movies: PropTypes.array,
  setSorting: PropTypes.func,
  setFilter: PropTypes.func
};
