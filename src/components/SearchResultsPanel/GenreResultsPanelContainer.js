import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import SearchResultsPanel from "./SearchResultsPanel";


const GenreResultsPanelContainer = (props) => {
  return (
    <SearchResultsPanel resultsTitleText={`Films by ${props.selectedMovie.genres[0]} genre`}/>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie
  };
};

export default connect(mapStateToProps)(GenreResultsPanelContainer);

GenreResultsPanelContainer.propTypes = {
  selectedMovie: PropTypes.object
};
