export const MOVIES_FETCH = 'MOVIES_FETCH';
export const MOVIES_FILTERING = 'MOVIES_FILTERING';
export const MOVIES_SORTING = 'MOVIES_SORTING';
export const  MOVIES_SEARCH = 'MOVIES_SEARCH';
export const MOVIE_SELECTION = 'MOVIE_SElECTION';
export const MOVIES_REMOVING= 'MOVIES_REMOVING';

export function fetchMovies(movies) {
  return {
    type: MOVIES_FETCH,
    movies
  };
}

export function selectMovie(selectedMovie) {
  console.log('selectedMovie-  ', selectedMovie);
  return {
    type: MOVIE_SELECTION,
    selectedMovie
  };
}

export function setFilter(filter) {
  console.log('filter-  ', filter);
  return {
    type: MOVIES_FILTERING,
    filter
  };
}

export function setSorting(sort) {
  console.log('sort-  ', sort);
  return {
    type: MOVIES_SORTING,
    sort
  };
}

export function setSearch(search) {
  console.log('search-  ', search);
  return {
    type: MOVIES_SEARCH,
    search
  };
}

export function removeMovies() {
  return {
    type: MOVIES_REMOVING
  };
}

export function moviesFetchData(sortBy, search, searchBy) {
  console.log(`https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=desc&search=${search}&searchBy=${searchBy}`);
  return (dispatch) => {
    fetch(`https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=desc&search=${search}&searchBy=${searchBy}`)
      .then((response) => response.json())
      .then((movies) => {
        console.log(movies);
        dispatch(fetchMovies(movies.data))
      })
  };
}

export function selectedMovieFetchData(id) {
  console.log(`https://reactjs-cdp.herokuapp.com/movies/${id}`);
  return (dispatch) => {
    fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
      .then((response) => response.json())
      .then((movie) => {
        console.log(movie);
        dispatch(selectMovie(movie.data))
      })
  };
}
