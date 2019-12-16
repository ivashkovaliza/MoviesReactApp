import React from 'react';
import PropTypes from "prop-types";
import ResultsTitle from "../ResultsTitle/ResultsTitle";
import Toggle from "../Toggle/Toggle";
import './ResultsPanel.scss';


const ResultsPanel = (props) => {
  const selectedMovieData = props.selectedMovieData;
  const resultsTitleText = selectedMovieData ? `Films by ${selectedMovieData.genres[0]} genre` : `${props.moviesAmount} movies found`;

  return (
    <div className={'result-panel'}>
      <div className={'result-panel__wrapper'}>
        <ResultsTitle title={resultsTitleText}/>
        {!selectedMovieData && <Toggle title='Sort by' toggleValues={['release date', 'rating']}/>}
      </div>
    </div>
  );
};

export default ResultsPanel;

ResultsPanel.propTypes = {
  moviesAmount: PropTypes.number,
  selectedMovieData: PropTypes.object,
};
