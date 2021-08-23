import React from 'react';
// import './App.css';
import Header from './components/Header/Header'

import Pages from './components/Pages.js';
import {BrowserRouter as Router} from 'react-router-dom';
import 'boxicons';
import {DataProvider} from './context/Dataprovider';
import Cart from './components/Cart/Cart.js';


function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
      <Header />
      <Cart />
      <Pages />
      </Router>
  
    </div>
    </DataProvider>
  );
}

export default App;
