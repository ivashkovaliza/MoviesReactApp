import React, {Component} from "react";
import PropTypes from 'prop-types';
import './Toggle.scss';

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.toggleValues[0],
    }
  }

  setActiveClass(activeElem) {
    this.setState({
      active: activeElem,
    });

    this.props.onToggle(activeElem)
  }

  render() {
    const firstTab = this.props.toggleValues[0];
    const secondTab = this.props.toggleValues[1];

    return (
      <div className={'sort'}>
        <p className={'sort__title'}>{this.props.title}</p>
        <button className={`sort__btn sort__btn--left ${this.state.active === firstTab ? 'sort__btn--active' : ''}`}
                onClick={() => this.setActiveClass(firstTab)}>
          {this.props.toggleValues[0]}
        </button>
        <button className={`sort__btn sort__btn--right ${this.state.active === secondTab ? 'sort__btn--active' : ''}`}
                onClick={() => this.setActiveClass(secondTab)}>
          {this.props.toggleValues[1]}
        </button>
      </div>
    );
  }
}

Toggle.propTypes = {
  title: PropTypes.string,
  toggleValues: PropTypes.array,
  onToggle: PropTypes.func,
};
