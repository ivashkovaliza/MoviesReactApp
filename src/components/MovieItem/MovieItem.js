import React from 'react';
import PropTypes from "prop-types";
import './MovieItem.scss';
import {selectMovie, moviesFetchData} from "../../actions/actions";
import {connect} from "react-redux";

const MovieItem = (props) => {
  return (
    <figure onClick={() => {
      props.onSelectMovie(props.movieData);
      props.selectMovie(props.movieData);
      props.moviesFetchData(null, props.movieData.genres[0], 'genres');
    }} className={'movie__item'}>
      <img className={'movie__item-img'} src={props.movieData.poster_path} alt=""/>
      <figcaption className={'movie__item-info'}>
        <div>
          <h2 className={'movie__item-title'}>{props.movieData.title}</h2>
          <p className={'movie__item-genre'}>{props.movieData.genres.join(' & ')}</p>
        </div>
        <p className={'movie__item-date'}>{props.movieData.release_date.slice(0, 4)}</p>
      </figcaption>
    </figure>
  );
};

const mapStateToProps = (state) => {
  return {
    searchBy: state.searchBy,
    sortBy: state.sortBy,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectMovie: (filter) => dispatch(selectMovie(filter)),
    moviesFetchData: (sortBy, search, searchBy) => dispatch(moviesFetchData(sortBy, search, searchBy))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);

MovieItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  genres: PropTypes.string,
  imgUrl: PropTypes.string,
  onSelectMovie: PropTypes.func,
  movieData: PropTypes.object,
  selectMovie: PropTypes.func,
  moviesFetchData: PropTypes.func
};
