import React, {Component} from "react";
import PropTypes from 'prop-types';
import Toggle from "../Toggle/Toggle";
import './SearchPanel.scss';

export default class SearchPanel extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      searchByValue: 'title',
      sortBy: 'release_date'
    }
  }

  changeSearchValue(value) {
    this.setState({
      searchValue: value
    });
  }

  search() {
    this.getData();
  }

  changeSearchByValue(value) {
    this.setState({
      searchByValue: value
    });
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') {
      this.search();
    }
  }

  getData() {
    fetch(`https://reactjs-cdp.herokuapp.com/movies?sortBy=${this.state.sortBy}&sortOrder=desc&search=${this.state.searchValue}&searchBy=${this.state.searchByValue}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            movies: result.data
          });
          this.props.onSearch(result.data);
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  render() {
    return (
      <>
        <h1 className={'h1'}>Find your film</h1>
        <div className={'search'}>
          <input className={'search__field'} name="Movie" placeholder="Search" type="search"
                 onKeyDown={event => this.handleKeyDown(event)}
                 onChange={event => this.changeSearchValue(event.target.value)}/>
          <button className={'search__btn'} type="submit" onClick={() => this.search()}>Search</button>
        </div>
        <Toggle title={'Search by'} onToggle={this.changeSearchByValue.bind(this)} toggleValues={['title', 'genres']}/>
      </>
    );
  }
}

SearchPanel.propTypes = {
  onSearch: PropTypes.func,
};
