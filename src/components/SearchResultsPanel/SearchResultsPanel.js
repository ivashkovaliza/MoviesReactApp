import React from 'react';
import PropTypes from 'prop-types';
import ResultsTitle from '../ResultsTitle/ResultsTitle';
import './SearchResultsPanel.scss';

const SearchResultsPanel = (props) => {
  return (
    <div className={'result-panel'}>
      <div className={'result-panel__wrapper'}>
        <ResultsTitle title={props.resultsTitleText}/>
        {props.children}
      </div>
    </div>
  );
};

export default SearchResultsPanel;

SearchResultsPanel.propTypes = {
  resultsTitleText: PropTypes.string,
  children: PropTypes.object
};
