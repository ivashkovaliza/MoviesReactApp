import React from 'react';
import './resultsPanel.scss';
import Toggle from "../Toggle/Toggle";
import ResultsTitle from "../ResultsTitle/ResultsTitle";

const ResultsPanel = () => {
  return (
    <div className={'result-panel'}>
      <div className={'wrapper'}>
        <ResultsTitle title={'7 movies found'} />
        <Toggle title='Sort by' toggleValues={['release date', 'rating']}/>
      </div>
    </div>
  );
};

export default ResultsPanel;