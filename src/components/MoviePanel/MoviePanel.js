import React from 'react';
import PropTypes from "prop-types";
import './MoviePanel.scss';

const MoviePanel = (props) => {
  const hasVoteAverage = !!props.selectedMovieData.vote_average;
  const runtime = props.selectedMovieData.runtime;
  const tagline = props.selectedMovieData.tagline;

  return (
    <div className={'movie'}>
      <img className={'movie__img'} src={props.selectedMovieData.poster_path} alt=""/>
      <div className={'movie__info'}>
        <div className={'movie__title-rating'}>
          <h1 className={'h1'}>{props.selectedMovieData.title}</h1>
          {hasVoteAverage && <span className={'movie__rating'}>{props.selectedMovieData.vote_average}</span>}
        </div>
        {tagline && <p className={'movie__tagline'}>{tagline}</p>}
        <div className={'movie__year-runtime'}>
          <p>
            <span className={'movie__numerical-data'}>{props.selectedMovieData.release_date.slice(0, 4)}</span> year
          </p>
          {runtime && <p><span className={'movie__numerical-data'}>{runtime}</span> min</p>}
        </div>
        <p>{props.selectedMovieData.overview}</p>
      </div>
    </div>
  );
};

export default MoviePanel;

MoviePanel.propTypes = {
  moviesAmount: PropTypes.number,
  isSelectedFilm: PropTypes.bool,
  selectedMovieData: PropTypes.object,
};
