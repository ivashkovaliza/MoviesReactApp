import React from "react";
import PropTypes from 'prop-types';
import Toggle from "../Toggle/Toggle";
import './SearchPanel.scss';
import {moviesFetchData, setFilter, setSearch} from "../../actions/actions";
import {connect} from "react-redux";
import { Link } from "react-router-dom";

const SearchPanel = (props) => {
  return (
    <>
      <h1 className={'h1'}>Find your film</h1>
      <div className={'search'}>
        <input className={'search__field'} name="Movie" placeholder="Search" type="search"
               onKeyDown={event => props.handleKeyDown(event)}
               onChange={event => {
                 props.setSearch(event.target.value);
               }}/>

        <Link to={`/search/movies?sortBy=${props.sortBy}&search=${props.search}&searchBy=${props.searchBy}`}>
          <button className={'search__btn'} type="submit" onClick={() => {
            props.moviesFetchData(props.sortBy, props.search, props.searchBy);
          }}>Search</button>
        </Link>
      </div>
      <Toggle title={'Search by'} handleToggleClick={props.setFilter} toggleValues={['title', 'genres']}/>
    </>
  );
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
    setSearch: (search) => dispatch(setSearch(search)),
    moviesFetchData: (sortBy, search, searchBy) => dispatch(moviesFetchData(sortBy, search, searchBy))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);

SearchPanel.propTypes = {
  moviesFetchData: PropTypes.func,
  searchBy: PropTypes.string,
  search: PropTypes.string,
  sortBy: PropTypes.string,
  setSearch: PropTypes.func,
  setFilter: PropTypes.func,
  handleKeyDown: PropTypes.func
};
