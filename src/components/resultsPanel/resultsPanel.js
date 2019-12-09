import React from 'react';
import './resultsPanel.scss';
import Toggle from "../Toggle/Toggle";

const ResultsPanel = () => {
  return (
    <div className={'result-panel'}>
      <div className={'wrapper'}>
        <p>7 movies found</p>
        <Toggle title='Sort by' toggleValues={['release date', 'rating']}/>
      </div>
    </div>
  );
};

export default ResultsPanel;