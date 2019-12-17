import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import { setFilter, moviesFetchData } from '../../actions/actions';
import './Toggle.scss';

class Toggle extends Component {
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

    //this.props.setFilter(activeElem);
    //this.props.fetchData('https://reactjs-cdp.herokuapp.com/movies');
  }

  render() {
    const firstTab = this.props.toggleValues[0];
    const secondTab = this.props.toggleValues[1];

    return (
      <div className={'sort'}>
        <p className={'sort__title'}>{this.props.title}</p>
        <button className={`sort__btn sort__btn--left ${this.state.active === firstTab ? 'sort__btn--active' : ''}`}
                onClick={() => {
                  this.props.handleToggleClick(firstTab);
                  this.setActiveClass(firstTab);
                }}>
          {this.props.toggleValues[0]}
        </button>
        <button className={`sort__btn sort__btn--right ${this.state.active === secondTab ? 'sort__btn--active' : ''}`}
                onClick={() => {
                  this.props.handleToggleClick(secondTab);
                  this.setActiveClass(secondTab);
                }}>
          {this.props.toggleValues[1]}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchBy: state.searchBy,
    sortBy: state.sortBy,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (filter) => dispatch(setFilter(filter)),
    fetchData: (url) => dispatch(moviesFetchData(url))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);

Toggle.propTypes = {
  title: PropTypes.string,
  toggleValues: PropTypes.array,
  onToggle: PropTypes.func,
  setFilter: PropTypes.func,
  fetchData: PropTypes.func,
  searchBy: PropTypes.string,
  handleToggleClick: PropTypes.func
};
