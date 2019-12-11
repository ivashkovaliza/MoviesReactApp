import React from "react";
import './SearchButton.scss';
import PropTypes from "prop-types";

const SearchButton = (props) => {
  return (
    <a href="#" onClick={() => props.removeSelectedMovie()} className={'search-icon'}>
      <i className="fas fa-search fa-2x fa-flip-horizontal"></i>
    </a>
  );
};

export default SearchButton;

SearchButton.propTypes = {
  removeSelectedMovie: PropTypes.func,
};
