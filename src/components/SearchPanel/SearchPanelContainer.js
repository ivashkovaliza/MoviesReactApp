import React, {Component} from "react";
import PropTypes from 'prop-types';
import Toggle from "../Toggle/Toggle";
import './SearchPanel.scss';
import {moviesFetchData, setFilter, setSearch} from "../../actions/actions";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import SearchPanel from "./SearchPanel";


const SearchPanelContainer =(props) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      //console.log(`Fetch searchBy ${this.props.searchBy}`);
      const searchButton = document.querySelector('.search__btn');
      searchButton.click();
      //this.props.moviesFetchData(this.props.sortBy, this.props.search, this.props.searchBy);
    }
  };

  const getData = () => {
    console.log('Get data- ', props.sortBy, props.search, props.searchBy);
    props.moviesFetchData(props.sortBy, props.search, props.searchBy);
  };

  return <SearchPanel getData={getData.bind(this)} handleKeyDown={handleKeyDown}/>;
};

const mapStateToProps = (state) => {
  return {
    searchBy: state.searchBy,
    sortBy: state.sortBy,
    search: state.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (filter) => dispatch(setFilter(filter)),
    setSearch: (filter) => dispatch(setSearch(filter)),
    moviesFetchData: (sortBy, search, searchBy) => dispatch(moviesFetchData(sortBy, search, searchBy))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanelContainer);

SearchPanelContainer.propTypes = {
  onSearch: PropTypes.func,
  moviesFetchData: PropTypes.func,
  searchBy: PropTypes.string,
  search: PropTypes.string,
  sortBy: PropTypes.string,
  setSearch: PropTypes.func,
  setFilter: PropTypes.func,
};