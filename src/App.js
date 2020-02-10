import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter as Router} from "react-router-dom"
import routes from "./routes"

function App() {
  return (
    <Router>
      <div className="App">
        {routes}
      </div>
    </Router>
  );
}

export default App;
