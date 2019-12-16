import React from "react";
import PropTypes from 'prop-types';

const ResultsTitle = (props) => {
  return <p>{props.title}</p>
};

ResultsTitle.propTypes = {
  title: PropTypes.string,
};

export default ResultsTitle;
