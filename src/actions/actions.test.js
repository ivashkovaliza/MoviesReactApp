import * as actions from './actions';
import * as types from '../constants/ActionTypes';

describe('actions', () => {
  it('should create an action MOVIES_FETCH', () => {
    const movies = [
      {
        "id": 513285,
        "title": "Trouble Is My Business",
      },
      {
        "id": 199928,
        "title": "The Outsider",
      }];
    const expectedAction = {
      type: types.MOVIES_FETCH,
      movies
    };
    expect(actions.fetchMovies(movies)).toEqual(expectedAction)
  });

  it('should create an action MOVIE_SELECTION', () => {
    const selectedMovie = {};
    const expectedAction = {
      type: types.MOVIE_SELECTION,
      selectedMovie
    };
    expect(actions.selectMovie(selectedMovie)).toEqual(expectedAction)
  });

  it('should create an action MOVIES_FILTERING', () => {
    const filter = 'title';
    const expectedAction = {
      type: types.MOVIES_FILTERING,
      filter
    };
    expect(actions.setFilter(filter)).toEqual(expectedAction)
  });

  it('should create an action MOVIES_SORTING', () => {
    const sort = 'release_date';
    const expectedAction = {
      type: types.MOVIES_SORTING,
      sort
    };
    expect(actions.setSorting(sort)).toEqual(expectedAction)
  });

  it('should create an action MOVIES_SEARCH', () => {
    const search = 'crime';
    const expectedAction = {
      type: types.MOVIES_SEARCH,
      search
    };
    expect(actions.setSearch(search)).toEqual(expectedAction)
  });

  it('should create an action MOVIES_REMOVING', () => {
    const expectedAction = {
      type: types.MOVIES_REMOVING,
    };
    expect(actions.removeMovies()).toEqual(expectedAction)
  });
});

// describe('Examining the syntax of Jest tests', () => {
//
//   it('sums numbers', () => {
//     expect(1 + 2).toEqual(3);
//     expect(2 + 2).toEqual(4);
//   });
// });