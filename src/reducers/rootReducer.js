import {
  MOVIES_FETCH,
  MOVIES_FILTERING,
  MOVIES_SORTING,
  MOVIES_SEARCH,
  MOVIE_SELECTION,
  MOVIES_REMOVING
} from '../actions/actions'

export const initialState = {
  movies: [],
  searchBy: 'title',
  sortBy: 'release_date',
  search: '',
  selectedMovie: null
};

export default function movieReducer(state = initialState, action) {
  switch(action.type) {
    case MOVIES_FETCH:
      return {
        ...state,
        movies: action.movies
      };
    case MOVIES_FILTERING:
      return {
        ...state,
        searchBy: action.filter
      };
    case MOVIES_SORTING:
      return {
        ...state,
        sortBy: action.sort
      };
    case MOVIES_SEARCH:
      return {
        ...state,
        search: action.search
      };
    case MOVIE_SELECTION:
      return {
        ...state,
        selectedMovie: action.selectedMovie
      };
    case MOVIES_REMOVING:
      return {
        ...state,
        movies: []
      };
    default:
      return state;
  }
}
