import React from 'react';
import PropTypes from "prop-types";
import {moviesFetchData, setSorting} from "../../actions/actions";
import {connect} from "react-redux";
import SearchResultsPanel from "./SearchResultsPanel";
import Toggle from "../Toggle/Toggle";

const SearchResultsPanelContainer = (props) => {
  const handleToggleClick = (sortBy) => {
    const toggleValues = {
      'release date': 'release_date',
      'rating': 'vote_average'
    };

    props.setSorting(toggleValues[sortBy]);

    if(props.movies.length) {
      props.moviesFetchData(toggleValues[sortBy], props.search, props.searchBy)
    }
  };

  return (
    <SearchResultsPanel handleToggleClick={handleToggleClick} resultsTitleText={`${props.movies.length} movies found`}>
      <Toggle title='Sort by' handleToggleClick={handleToggleClick} toggleValues={['release date', 'rating']}/>
    </SearchResultsPanel>
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
    moviesFetchData: (sortBy, search, searchBy) => dispatch(moviesFetchData(sortBy, search, searchBy))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPanelContainer);

SearchResultsPanelContainer.propTypes = {
  moviesFetchData: PropTypes.func,
  searchBy: PropTypes.string,
  search: PropTypes.string,
  sortBy: PropTypes.string,
  movies: PropTypes.array,
  setSorting: PropTypes.func,
};
