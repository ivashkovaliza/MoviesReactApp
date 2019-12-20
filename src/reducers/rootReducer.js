import * as types from '../constants/ActionTypes';

export const initialState = {
  movies: [],
  searchBy: 'title',
  sortBy: 'release_date',
  search: '',
  selectedMovie: null
};

export default function movieReducer(state = initialState, action) {
  switch(action.type) {
    case types.MOVIES_FETCH:
      return {
        ...state,
        movies: action.movies
      };
    case types.MOVIES_FILTERING:
      return {
        ...state,
        searchBy: action.filter
      };
    case types.MOVIES_SORTING:
      return {
        ...state,
        sortBy: action.sort
      };
    case types.MOVIES_SEARCH:
      return {
        ...state,
        search: action.search
      };
    case types.MOVIE_SELECTION:
      return {
        ...state,
        selectedMovie: action.selectedMovie
      };
    case types.MOVIES_REMOVING:
      return {
        ...state,
        movies: []
      };
    default:
      return state;
  }
}
