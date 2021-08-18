import React from 'react';
// import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import Pages from './components/Pages.js';
import {BrowserRouter as Router} from 'react-router-dom';
import 'boxicons';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Pages />
      </Router>
  
    </div>
  );
}

export default App;
