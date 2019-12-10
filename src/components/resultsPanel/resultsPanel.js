import React from 'react';
import './resultsPanel.scss';
import Toggle from "../Toggle/Toggle";
import ResultsTitle from "../ResultsTitle/ResultsTitle";
import PropTypes from "prop-types";

const ResultsPanel = (props) => {
  const isSelectedFilm = props.selectedMovieData;
  console.log(isSelectedFilm);
  const resultsTitleText = isSelectedFilm ? `Films by ${props.selectedMovieData.genres[0]} genre` : `${props.moviesAmount} movies found`;

  return (
    <div className={'result-panel'}>
      <div className={'wrapper'}>
        <ResultsTitle title={resultsTitleText} />
        {!isSelectedFilm && <Toggle title='Sort by' toggleValues={['release date', 'rating']}/>}
      </div>
    </div>
  );
};

export default ResultsPanel;

ResultsPanel.propTypes = {
  moviesAmount: PropTypes.number,
  isSelectedFilm: PropTypes.bool,
  selectedMovieData: PropTypes.object,
};