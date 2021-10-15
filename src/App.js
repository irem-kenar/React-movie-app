import Homepage from './pages/Home';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Homepage} />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
