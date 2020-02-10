import React from 'react';
import './App.css';
import {HashRouter as Router} from "react-router-dom"
import routes from "./routes"
import store from "./Redux/store"
import {Provider} from "react-redux"
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
        {routes}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
