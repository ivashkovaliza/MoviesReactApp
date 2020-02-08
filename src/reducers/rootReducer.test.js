import rootReducer, { initialState } from "./rootReducer";
import * as types from '../constants/ActionTypes';

describe('reducer', () => {

  it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual(
      initialState
    )
  });

  it('should handle MOVIES_FILTERING', () => {
    expect(
      rootReducer(initialState, {
        type: types.MOVIES_FILTERING,
        filter: 'genres'
      })
    ).toEqual(
      {
        ...initialState,
        searchBy: 'genres'
      }
    )
  });

  it('should handle MOVIES_SORTING', () => {
    expect(
      rootReducer(initialState, {
        type: types.MOVIES_SORTING,
        sort: 'vote_average'
      })
    ).toEqual(
      {
        ...initialState,
        sortBy: 'vote_average'
      }
    )
  });

  it('should handle MOVIES_SEARCH', () => {
    expect(
      rootReducer(initialState, {
        type: types.MOVIES_SEARCH,
        search: 'crime'
      })
    ).toEqual(
      {
        ...initialState,
        search: 'crime'
      }
    )
  });

  it('should handle MOVIE_SELECTION', () => {
    expect(
      rootReducer(initialState, {
        type: types.MOVIE_SELECTION,
        selectedMovie: {
          "id": 513285,
          "title": "Trouble Is My Business",
        }
      })
    ).toEqual(
      {
        ...initialState,
        selectedMovie: {
          "id": 513285,
          "title": "Trouble Is My Business",
        }
      }
    )
  });

  it('should handle MOVIES_REMOVING', () => {
    expect(
      rootReducer(initialState, {
        type: types.MOVIES_REMOVING,
      })
    ).toEqual(
      {
        ...initialState,
        movies: []
      }
    )
  });
});