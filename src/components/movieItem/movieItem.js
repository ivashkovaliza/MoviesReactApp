import React from 'react';
import './movieItem.scss';

const MovieItem = () => {
  return (
    <figure className={'movie__item'}>
      <img className={'movie__item-img'} src={"https://picsum.photos/1200/630"} alt="" />
      <figcaption className={'movie__item-info'}>
        <div>
          <h3 className={'movie__item-title'}>Kill Bill: vol 2</h3>
          <p className={'movie__item-genre'}>Action & Adventure</p>
        </div>
        <p className={'movie__item-date'}>2004</p>
      </figcaption>
    </figure>
  );
};

export default MovieItem;