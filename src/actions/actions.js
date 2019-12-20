import * as types from '../constants/ActionTypes';

export function fetchMovies(movies) {
  return {
    type: types.MOVIES_FETCH,
    movies
  };
}

export function selectMovie(selectedMovie) {
  return {
    type: types.MOVIE_SELECTION,
    selectedMovie
  };
}

export function setFilter(filter) {
  return {
    type: types.MOVIES_FILTERING,
    filter
  };
}

export function setSorting(sort) {
  return {
    type: types.MOVIES_SORTING,
    sort
  };
}

export function setSearch(search) {
  return {
    type: types.MOVIES_SEARCH,
    search
  };
}

export function removeMovies() {
  return {
    type: types.MOVIES_REMOVING
  };
}

export function moviesFetchData(sortBy, search, searchBy) {
  // console.log(`https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=desc&search=${search}&searchBy=${searchBy}`);
  return (dispatch) => {
    fetch(`https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=desc&search=${search}&searchBy=${searchBy}`)
      .then((response) => response.json())
      .then((movies) => {
        console.log(movies);
        dispatch(fetchMovies(movies.data))
      })
  };
}
