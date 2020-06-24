import React from 'react';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Components/Routes';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
