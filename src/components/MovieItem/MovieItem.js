import React from 'react';
import PropTypes from "prop-types";
import './MovieItem.scss';
import {selectMovie, moviesFetchData} from "../../actions/actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const MovieItem = (props) => {
  return (
    <Link to={`/movie/${props.movieData.id}`} onClick={() => {
      props.selectMovie(props.movieData);
      props.moviesFetchData('release_date', props.movieData.genres[0], 'genres');
    }}>
      <figure className={'movie__item'}>
        <img className={'movie__item-img'} src={props.movieData.poster_path} alt=""/>
        <figcaption className={'movie__item-info'}>
          <div>
            <h2 className={'movie__item-title'}>{props.movieData.title}</h2>
            <p className={'movie__item-genre'}>{props.movieData.genres.join(' & ')}</p>
          </div>
          <p className={'movie__item-date'}>{props.movieData.release_date.slice(0, 4)}</p>
        </figcaption>
      </figure>
    </Link>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectMovie: (movie) => dispatch(selectMovie(movie)),
    moviesFetchData: (sortBy, search, searchBy) => dispatch(moviesFetchData(sortBy, search, searchBy))
  }
};

export default connect(null, mapDispatchToProps)(MovieItem);

MovieItem.propTypes = {
  movieData: PropTypes.object,
  selectMovie: PropTypes.func,
  moviesFetchData: PropTypes.func
};
