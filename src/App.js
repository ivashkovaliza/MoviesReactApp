import React, {Component} from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from './components/Main/Main';
//import SearchButton from "../SearchButton/SearchButton";
import MoviePanel from './components/MoviePanel/MoviePanel';
import  SearchResultsPanelContainer from './components/SearchResultsPanel/SearchResultsPanelContainer';
import  GenreResultsPanelContainer from './components/SearchResultsPanel/GenreResultsPanelContainer';
import SearchPanel from './components/SearchPanel/SearchPanel';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import SearchPanelContainer from './components/SearchPanel/SearchPanelContainer'
import SearchButton from "./components/SearchButton/SearchButton";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import './styles/reset.scss'
import './styles/style.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

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

  // onSelectMovie(selectedMovieData) {
  //   this.setState({
  //     selectedMovieData: selectedMovieData,
  //   });
  // }

  removeSelectedMovie() {
    this.setState({
      selectedMovieData: null,
    });
  }

  render() {
    return (
      <ErrorBoundary>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header headerContent={<SearchPanelContainer />} removeSelectedMovie={this.removeSelectedMovie.bind(this)}
                      selectedMovieData={this.state.selectedMovieData} onSearch={this.onSearch.bind(this)}/>
              <Main selectedMovieData={this.state.selectedMovieData} ResultsPanel={<SearchResultsPanelContainer />}/>
              <Footer/>
            </Route>
            <Route exact path="/search/:query">
              <Header headerContent={<SearchPanelContainer />} removeSelectedMovie={this.removeSelectedMovie.bind(this)}
                      selectedMovieData={this.state.selectedMovieData} onSearch={this.onSearch.bind(this)}/>
              <Main selectedMovieData={this.state.selectedMovieData} ResultsPanel={<SearchResultsPanelContainer />}/>
              <Footer/>
            </Route>
            <Route path="/movie/:id">
              <Header headerContent={<MoviePanel />} removeSelectedMovie={this.removeSelectedMovie.bind(this)}
                      onSearch={this.onSearch.bind(this)}>
                <SearchButton />
              </Header>
              <Main selectedMovieData={this.state.selectedMovieData} ResultsPanel={<GenreResultsPanelContainer />}
                    moviesAmount={this.state.movies.length}
                    movies={this.state.movies}/>
              <Footer/>
            </Route>
            <Route path='/notfound' component={PageNotFound} />
            <Redirect from={'*'} to={'/notfound'} />
          </Switch>
          {/*<Header removeSelectedMovie={this.removeSelectedMovie.bind(this)}*/}
          {/*        selectedMovieData={this.state.selectedMovieData} onSearch={this.onSearch.bind(this)}/>*/}
          {/*<Main selectedMovieData={this.state.selectedMovieData} onSelectMovie={this.onSelectMovie.bind(this)}*/}
          {/*      movies={this.state.movies}/>*/}
        </Router>
      </ErrorBoundary>
    );
  }
}

export default App;
