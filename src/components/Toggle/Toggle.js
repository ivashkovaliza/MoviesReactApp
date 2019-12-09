import React, { Component } from "react";
import PropTypes from 'prop-types';
import './Toggle.scss';

export default class Toggle extends Component {
  constructor() {
    super();
    this.state = {
      active: 'firstTab',
    }
  }

  setActiveClass(activeElem) {
    this.setState({
      active: activeElem,
    });
  }

  render() {
    return (
      <div className={'sort'}>
        <p className={'sort-title'}>{this.props.title}</p>
        <button className={`sort-btn sort-btn--left ${this.state.active === 'firstTab' ? 'sort-btn--active' : ''}`} onClick={this.setActiveClass.bind(this, 'firstTab')}>{this.props.toggleValues[0]}</button>
        <button className={`sort-btn sort-btn--right ${this.state.active === 'secondTab' ? 'sort-btn--active' : ''}`} onClick={this.setActiveClass.bind(this, 'secondTab')}>{this.props.toggleValues[1]}</button>
      </div>
    );
  }
}

Toggle.propTypes = {
  title: PropTypes.string,
  toggleValues: PropTypes.array
};
