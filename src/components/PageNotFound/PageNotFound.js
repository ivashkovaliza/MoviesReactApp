import React from "react";
import './PageNotFound.scss';
import {Link} from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className={'error__wrapper'}>
      <h1 className={'error__msg'}>404 Page Not Found</h1>
      <Link to={'/'} className={'error__link'}>Return to Home page</Link>
    </div>
  );
};

export default PageNotFound;