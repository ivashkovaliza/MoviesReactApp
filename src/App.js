import React, { Component } from "react";

import './styles/reset.scss'
import './styles/style.scss';

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from './components/main/main'

class App extends Component {
  constructor() {
    super();
    this.state= {
      searchData: ''
      //'https://reactjs-cdp.herokuapp.com/movies?search=kill&searchBy=title'
    }
  }

  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
