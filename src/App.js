import React, {Component} from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from './components/Main/Main';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import './styles/reset.scss'
import './styles/style.scss';
import { BrowserRouter as Router} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovieData: null,
      movies: []
    }
  }

  onSearch(val) {
    this.setState({
      movies: val,
    });
  }

  onSelectMovie(selectedMovieData) {
    this.setState({
      selectedMovieData: selectedMovieData,
    });
  }

  removeSelectedMovie() {
    this.setState({
      selectedMovieData: null,
    });
  }

  render() {
    return (
      <ErrorBoundary>
        <Router>
          <Header removeSelectedMovie={this.removeSelectedMovie.bind(this)}
                  selectedMovieData={this.state.selectedMovieData} onSearch={this.onSearch.bind(this)}/>
          <Main selectedMovieData={this.state.selectedMovieData} onSelectMovie={this.onSelectMovie.bind(this)}
                movies={this.state.movies}/>
          <Footer/>
        </Router>
      </ErrorBoundary>
    );
  }
}

export default App;
