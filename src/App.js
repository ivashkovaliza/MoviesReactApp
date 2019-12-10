import React, { Component } from "react";

import './styles/reset.scss'
import './styles/style.scss';

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from './components/Main/Main'

class App extends Component {
  constructor() {
    super();
    this.state= {
      sortBy: 'release_date',
      isSelectedFilm: false,
      selectedMovieData: null,
      movies: []
    }
  }

  onSearch(val) {
    this.setState({
      movies: val,
    });
  }

  // onSort(val) {
  //   this.setState({
  //     sortBy: val,
  //   });
  // }

  onSelectFilm(isSelectedFilm, selectedMovieData) {
    this.setState({
      isSelectedFilm: isSelectedFilm,
      selectedMovieData: selectedMovieData,
    });
  }

  render() {
    console.log('app state   ', this.state);
    return (
      <>
        <Header isSelectedFilm={this.state.selectedMovieData} selectedMovieData={this.state.selectedMovieData} onSearch={this.onSearch.bind(this)}/>
        <Main selectedMovieData={this.state.selectedMovieData} onSelectFilm={this.onSelectFilm.bind(this)} movies={this.state.movies} />
        <Footer />
      </>
    );
  }
}

export default App;
