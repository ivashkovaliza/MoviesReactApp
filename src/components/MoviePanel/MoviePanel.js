import React from 'react';
import PropTypes from "prop-types";
import './MoviePanel.scss';
import {connect} from "react-redux";

const MoviePanel = (props) => {
  const hasVoteAverage = !!props.selectedMovie.vote_average;
  const runtime = props.selectedMovie.runtime;
  const tagline = props.selectedMovie.tagline;

  return (
    <div className={'movie'}>
      <img className={'movie__img'} src={props.selectedMovie.poster_path} alt=""/>
      <div className={'movie__info'}>
        <div className={'movie__title-rating'}>
          <h1 className={'h1'}>{props.selectedMovie.title}</h1>
          {hasVoteAverage && <p className={'movie__rating'}>{props.selectedMovie.vote_average}</p>}
        </div>
        {tagline && <p className={'movie__tagline'}>{tagline}</p>}
        <div className={'movie__year-runtime'}>
          <p>
            <span className={'movie__numerical-data'}>{props.selectedMovie.release_date.slice(0, 4)}</span> year
          </p>
          {runtime && <p><span className={'movie__numerical-data'}>{runtime}</span> min</p>}
        </div>
        <p>{props.selectedMovie.overview}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie,
  };
};

export default connect(mapStateToProps)(MoviePanel);

MoviePanel.propTypes = {
  selectedMovie: PropTypes.object,
};
