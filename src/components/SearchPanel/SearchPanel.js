import React from "react";
import PropTypes from 'prop-types';
import Toggle from "../Toggle/Toggle";
import './SearchPanel.scss';
import {moviesFetchData, setFilter, setSearch, setSorting} from "../../actions/actions";
import {connect} from "react-redux";
import { Link } from "react-router-dom";

const SearchPanel = (props) => {

  const ParseQuery = () => {
    const queryParams = window.location.search.slice(1).split('&').map((item) =>  item.split('=')[1]);
    const [sort, search, filter] = [...queryParams];

    console.log(search);

    props.setSorting(sort);
    props.setSearch(search);
    props.setFilter(filter);

    props.moviesFetchData(sort, search, filter);
  };


  window.addEventListener('load', () => {
    if(window.location.search) {
      ParseQuery();
      //props.getData()
    }
    console.log('page is fully loaded');
  });


    return (
      <>
        <h1 className={'h1'}>Find your film</h1>
        <div className={'search'}>
          <input className={'search__field'} name="Movie" placeholder="Search" type="search"
                 onKeyDown={event => props.handleKeyDown(event)}
                 onChange={event => {
                   props.setSearch(event.target.value);
                   //this.changeSearchValue(event.target.value);
                 }}/>
                 {/*///movies?sortBy=${props.sortBy}&sortOrder=desc&search=${props.search}&searchBy=${props.searchBy}*/}

          <Link to={`/search/movies?sortBy=${props.sortBy}&search=${props.search}&searchBy=${props.searchBy}`}>
            <button className={'search__btn'} type="submit" onClick={() => {
              props.getData();
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
    setSorting: (sort) => dispatch(setSorting(sort)),
    moviesFetchData: (sortBy, search, searchBy) => dispatch(moviesFetchData(sortBy, search, searchBy))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);

SearchPanel.propTypes = {
  onSearch: PropTypes.func,
  moviesFetchData: PropTypes.func,
  searchBy: PropTypes.string,
  search: PropTypes.string,
  sortBy: PropTypes.string,
  setSearch: PropTypes.func,
  setFilter: PropTypes.func,
  setSorting: PropTypes.func,
  handleKeyDown: PropTypes.func,
  getData: PropTypes.func,
};
