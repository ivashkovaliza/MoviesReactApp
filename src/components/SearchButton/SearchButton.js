import React from "react";
import './SearchButton.scss';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {removeMovies} from "../../actions/actions";
import {connect} from "react-redux";

const SearchButton = (props) => {
  return (
    <Link to={'/'} className={'search-icon'} onClick={() => props.removeMovies()}>
      <i className="fas fa-search fa-2x fa-flip-horizontal"></i>
    </Link>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeMovies: (filter) => dispatch(removeMovies(filter)),
  }
};

export default connect(null, mapDispatchToProps)(SearchButton);

SearchButton.propTypes = {
  removeMovies: PropTypes.func,
};
