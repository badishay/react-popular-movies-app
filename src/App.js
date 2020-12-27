import './App.css';
import {Switch, Route, useHistory} from 'react-router-dom'
import React, {useState,useEffect} from 'react'
import Navbar from './components/Navbar'
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'
import MyContext from './components/myContext'
import axios from 'axios'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          <h1 className='p-5' >hello from y badichi</h1>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
