import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import './Header.scss';

const Header = (props) => {
  return (
    <header className={'header'}>
      <div className={'wrapper'}>
        <div className={'header__top'}>
          <Logo className={'header__logo'} />
          {props.children}
        </div>
        <div className={'header__content'}>
          {props.headerContent}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  headerContent: PropTypes.object,
  children: PropTypes.object
};

export default Header;
