import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import LoaderExampleTextShorthand from '../src/Cards/loader';
import ButtonExampleButton from '../src/Cards/menubar';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <LoaderExampleTextShorthand/> */}
      <ButtonExampleButton/>
      </div>
    );
  }
}

export default App;
