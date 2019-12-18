import React, {Component} from "react";
import PropTypes from 'prop-types';
import Toggle from "../Toggle/Toggle";
import './SearchPanel.scss';
import {moviesFetchData, setFilter, setSearch} from "../../actions/actions";
import {connect} from "react-redux";
import { Link } from "react-router-dom";

class SearchPanel extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      searchByValue: 'title',
      sortBy: 'release_dateee'
    }
  }

  changeSearchValue(value) {
    this.setState({
      searchValue: value
    });
  }

  changeSearchByValue(value) {
    this.setState({
      searchByValue: value
    });
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') {
      console.log(`Fetch searchBy ${this.props.searchBy}`);
      this.props.moviesFetchData(this.props.sortBy, this.props.search, this.props.searchBy);
    }
  }

  getData() {
    this.props.moviesFetchData(this.props.sortBy, this.props.search, this.props.searchBy);

    // fetch(`https://reactjs-cdp.herokuapp.com/movies?sortBy=${this.state.sortBy}&sortOrder=desc&search=${this.state.searchValue}&searchBy=${this.state.searchByValue}`)
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({
    //         movies: result.data
    //       });
    //       this.props.onSearch(result.data);
    //     },
    //     (error) => {
    //       this.setState({
    //         error
    //       });
    //     }
    //   )
  }

  handleToggleClick(searchBy) {
    this.props.setFilter(searchBy);
  }

  render() {
    return (
      <>
        <h1 className={'h1'}>Find your film</h1>
        <div className={'search'}>
          <input className={'search__field'} name="Movie" placeholder="Search" type="search"
                 onKeyDown={event => this.handleKeyDown(event)}
                 onChange={event => {
                   this.props.setSearch(event.target.value);
                   //this.changeSearchValue(event.target.value);
                 }}/>
          {/*https://reactjs-cdp.herokuapp.com/movies?sortBy=release_date&sortOrder=desc&search=&searchBy=title*/}

          <Link to={`search/movies?sortBy=${this.props.sortBy}&sortOrder=desc&search=${this.props.search}&searchBy=${this.props.searchBy}`}>
            <button className={'search__btn'} type="submit" onClick={() => this.getData()}>Search</button>
          </Link>
        </div>
        <Toggle title={'Search by'} handleToggleClick={this.handleToggleClick.bind(this)} onToggle={this.changeSearchByValue.bind(this)} toggleValues={['title', 'genres']}/>
      </>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);

SearchPanel.propTypes = {
  onSearch: PropTypes.func,
  moviesFetchData: PropTypes.func,
  searchBy: PropTypes.string,
  search: PropTypes.string,
  sortBy: PropTypes.string,
  setSearch: PropTypes.func,
  setFilter: PropTypes.func,
};
