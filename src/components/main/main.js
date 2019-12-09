import React from 'react';
import './main.scss';
import ResultsPanel from '../resultsPanel/resultsPanel';
import MovieItem from '../movieItem/movieItem';

const Main = () => {
  return (
    <main className={'main'}>
      <ResultsPanel />
      <MovieItem />
    </main>
  );
};

export default Main;