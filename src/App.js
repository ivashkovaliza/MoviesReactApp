import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from './components/Main/Main';
import MoviePanel from './components/MoviePanel/MoviePanel';
import  SearchResultsPanelContainer from './components/SearchResultsPanel/SearchResultsPanelContainer';
import  GenreResultsPanelContainer from './components/SearchResultsPanel/GenreResultsPanelContainer';
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
  Redirect,
} from "react-router-dom";
import {moviesFetchData, setFilter, setSearch, setSorting} from "./actions/actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const App = (props) => {
  const fetchFromUrlData = () => {
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
      fetchFromUrlData();
    }
    console.log('page is fully loaded');
  });

  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header headerContent={<SearchPanelContainer />}/>
            <Main resultsPanel={<SearchResultsPanelContainer />}/>
            <Footer/>
          </Route>
          <Route exact path="/search/:query">
            <Header headerContent={<SearchPanelContainer />} />
            <Main resultsPanel={<SearchResultsPanelContainer />}/>
            <Footer/>
          </Route>
          <Route path="/movie/:id">
            <Header headerContent={<MoviePanel />}>
              <SearchButton />
            </Header>
            <Main resultsPanel={<GenreResultsPanelContainer />}/>
            <Footer/>
          </Route>
          <Route path='/notfound' component={PageNotFound} />
          <Redirect from={'*'} to={'/notfound'} />
        </Switch>
      </Router>
    </ErrorBoundary>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  onSearch: PropTypes.func,
  moviesFetchData: PropTypes.func,
  searchBy: PropTypes.string,
  search: PropTypes.string,
  sortBy: PropTypes.string,
  setSearch: PropTypes.func,
  setFilter: PropTypes.func,
  setSorting: PropTypes.func,
  handleKeyDown: PropTypes.func
};
