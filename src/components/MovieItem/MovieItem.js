import React from 'react';
import './MovieItem.scss';
import PropTypes from "prop-types";

const MovieItem = (props) => {
  return (
    <figure onClick={() => {props.onSelectFilm(true, props.movieData)}} className={'movie__item'}>
      <img className={'movie__item-img'} src={props.movieData.poster_path} alt="" />
      <figcaption className={'movie__item-info'}>
        <div>
          <h3 className={'movie__item-title'}>{props.movieData.title}</h3>
          <p className={'movie__item-genre'}>{props.movieData.genres.join(' & ')}</p>
        </div>
        <p className={'movie__item-date'}>{props.movieData.release_date.slice(0,4)}</p>
      </figcaption>
    </figure>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  genres: PropTypes.string,
  imgUrl: PropTypes.string,
  onSelectFilm: PropTypes.func,
  movieData: PropTypes.object
};